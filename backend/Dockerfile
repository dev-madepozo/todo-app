FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lokl.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm prisma generate
RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/server.js"]
