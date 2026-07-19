# AWS setup

This documents what needs to exist on AWS for `.github/workflows/deploy.yml` to succeed. The
pipeline runs after `CI` succeeds on `main`, builds two Docker images (`web`, `api`) via
[`deploy/docker-compose.yml`](../deploy/docker-compose.yml), pushes them to GitHub Container
Registry (GHCR), then SSHes into a single EC2 instance and runs `docker compose pull && docker
compose up -d` there.

- `web` — `nginx:1.27-alpine` serving the built `apps/web` static site, published to
  `127.0.0.1:8080` on the host (see [`apps/web/Dockerfile`](../apps/web/Dockerfile) /
  [`apps/web/nginx.conf`](../apps/web/nginx.conf)). It also reverse-proxies `/api/*` to the `api`
  container over the private Docker network the two containers share.
- `api` — the built `apps/api` server (pruned to prod deps, same as before), bound to `0.0.0.0:3000`
  **inside its own container only** (see [`apps/api/Dockerfile`](../apps/api/Dockerfile)).

**The API publishes no port to the host at all** — `deploy/docker-compose.yml` gives it no
`ports:` entry, so nothing outside the `internal` Docker network the two containers share can
reach it. The only way to reach it is through `web`'s nginx `/api/*` proxy. That means today "web"
is the only consumer, and any additional app added to the monorepo that needs the API must either
join this same Docker network or otherwise be proxied through `web` — never by publishing port
3000 on the host.

## 1. EC2 instance

- One instance is enough — the workflow deploys both containers to a single host
  (`concurrency.group: deploy-production` in `deploy.yml` also assumes this).
- A recent **Ubuntu** AMI (the default EC2 Ubuntu images) — no Node, pnpm, or pm2 needed on the
  host anymore, since images are built in CI and just pulled/run here.
- Docker itself does **not** need to be installed manually. `deploy.yml`'s "Ensure Docker is
  installed on EC2" step SSHes in before every deploy and, if `docker`/`docker compose` aren't
  already present, installs them via [`get.docker.com`](https://get.docker.com) and adds the
  deploy user to the `docker` group — idempotent, so it's a no-op on every deploy after the first.
  This targets **apt-based distros (Ubuntu/Debian)** specifically; it isn't tested against Amazon
  Linux, which is why Ubuntu is the recommended AMI here.
  - This relies on the deploy user having **passwordless sudo**, which the default `ubuntu` user
    on AWS's official Ubuntu AMIs already has out of the box (via cloud-init). If you use a
    different AMI or a non-default user, configure passwordless sudo for it first.
- The deploy user's home directory needs write access — the workflow creates `~/peregrine-commit`
  and writes `docker-compose.yml` there.

## 2. SSH access for GitHub Actions

The workflow authenticates as a normal SSH user (via `webfactory/ssh-agent`), not an AWS-specific
mechanism:

1. Generate a dedicated keypair for CI (don't reuse a personal key):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy" -f deploy_key -N ""
   ```
2. Append `deploy_key.pub` to `~/.ssh/authorized_keys` for the deploy user on the EC2 instance.
3. Keep `deploy_key` (the private half) for the GitHub secret below — don't commit it.

## 3. GitHub repository secrets

Set these under repo Settings → Secrets and variables → Actions (referenced directly in
`deploy.yml`):

| Secret        | Value                                                          |
| ------------- | -------------------------------------------------------------- |
| `EC2_HOST`    | Public DNS name or Elastic IP of the instance                  |
| `EC2_USER`    | SSH login user (e.g. `ubuntu`)                                 |
| `EC2_SSH_KEY` | Private half of the CI keypair from step 2, PEM/OpenSSH format |

An Elastic IP is worth attaching so `EC2_HOST` doesn't change if the instance is stopped/restarted.
No registry credentials are needed as a secret — pushing to GHCR uses the workflow's built-in
`GITHUB_TOKEN` (see step 5 below for why pulling doesn't need credentials either).

The api's runtime env (`RATE_LIMIT_WINDOW_MS`, `RATE_LIMIT_MAX`, and eventually `DB_*` once the
API talks to MySQL) currently has safe defaults baked into the code and isn't set by the deploy
pipeline. If that changes, don't add credentials to `deploy/docker-compose.yml` (it's committed) —
create a `.env` file at `~/peregrine-commit/.env` on the instance instead, outside of what the
workflow overwrites; `docker-compose.yml`'s `api` service already reads it via `env_file` (not
required to exist).

## 4. GHCR package visibility (one-time)

The first successful run of `deploy.yml` pushes two packages: `peregrine-commit-web` and
`peregrine-commit-api`, under the repo owner's GitHub account. GHCR packages default to **private**
even when the parent repo is public, which would make `docker compose pull` on the EC2 instance
fail without credentials. Since this is a public site with nothing sensitive in the images:

1. After the first deploy run pushes the packages, go to each package's page (Profile → Packages)
   and open **Package settings**.
2. Change visibility to **Public**.

This is a one-time step per package — once public, the host never needs to authenticate to GHCR at
all, so there's no registry credential to store or rotate on the instance.

## 5. Security group

- Inbound SSH (22) — scope this to GitHub Actions' published IP ranges if possible, or at minimum
  restrict it to TCP/22; GitHub's runner IPs are not static, so this is usually left open on 22
  with key-based auth as the actual gate.
- Inbound on whatever port the site is actually served to visitors on (80/443 — see networking
  note below).
- No inbound needed on **8080** (web's published port) or **3000** (api) from the public internet.
  `web` is bound to `127.0.0.1:8080` on the host, so it's already unreachable externally without
  the reverse proxy; `api` publishes no host port at all, so there's nothing to open or close for
  it regardless of security group rules.

## 6. Reverse proxy, domain, and TLS

The `web` container is published to `127.0.0.1:8080` on the host — `deploy.yml` doesn't configure
a domain, port 80/443 listener, or certificate. For anything beyond a loopback smoke test, the
instance needs a host-level reverse proxy (e.g. nginx, installed directly on the instance —
separate from the nginx running inside the `web` container) that:

- Listens on 80/443 for the public domain.
- Proxies the site's default route to `127.0.0.1:8080`.

The API needs no separate proxy rule here: browser requests to `/api/*` hit `web` (same origin),
and `web`'s own in-container nginx (`apps/web/nginx.conf`) forwards those to the `api` container
internally.

Also needed:

- A DNS A/AAAA record pointing the target domain at the instance's Elastic IP.
- A TLS certificate (e.g. via `certbot`/Let's Encrypt) terminated at the host-level proxy.

None of this is currently automated by `deploy.yml` — it's a one-time manual setup on the instance
(or should be captured in provisioning tooling/an AMI if the instance is ever recreated). Any
future app in the monorepo that needs the API should be proxied the same way, through `web`, from
the same host.

## Deploy flow summary

```
CI passes on main
  -> deploy.yml logs in to ghcr.io with GITHUB_TOKEN
  -> docker compose -f deploy/docker-compose.yml build   (builds web + api images)
  -> docker compose -f deploy/docker-compose.yml push    (pushes both to GHCR)
  -> ssh's in and installs Docker if missing (idempotent, no-op after the first run)
  -> scp's deploy/docker-compose.yml to EC2_HOST as EC2_USER (~/peregrine-commit/docker-compose.yml)
  -> ssh's in:
       docker compose pull        (pulls the images just pushed; public packages, no auth needed)
       docker compose up -d --remove-orphans
       docker image prune -f
```
