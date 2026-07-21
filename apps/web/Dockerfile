FROM node:25-alpine AS build
WORKDIR /repo
RUN npm install -g pnpm@10.30.2
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm exec turbo run build --filter=web

FROM nginx:1.27-alpine AS runtime
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/web/dist /usr/share/nginx/html
EXPOSE 80
