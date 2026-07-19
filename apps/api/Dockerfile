FROM node:25-alpine AS build
WORKDIR /repo
RUN npm install -g pnpm@10.30.2
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm exec turbo run build --filter=api
RUN pnpm --filter=api deploy --prod --legacy /prod/api

FROM node:25-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /prod/api .
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "dist/server.js"]
