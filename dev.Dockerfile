# 引用node18版本及以上
FROM node:18-alpine AS base

# RUN apt-get update -y
# RUN apt-get install -y openssl
FROM base AS builder

# 创建工作区目录 app
WORKDIR /app

# 将构建上下文中的所有文件和目录复制到容器的app目录下
COPY . .

# 指定node源
# RUN npm i --registry=https://registry.npmmirror.com;

RUN npx prisma generate

RUN npm run build;

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED 1

# # RUN node server.js
# RUN npm run start

COPY prisma ./prisma/
# COPY dev.startup.sh ./dev.startup.sh

COPY dev.startup.sh ./dev.startup.sh

# 修改相关脚本文件权限，使其成为可以执行的文件
RUN chmod +x /app/dev.startup.sh

# 设置容器启动时执行的命令 当容器启动时则执行此脚本
ENTRYPOINT ["sh", "/app/dev.startup.sh"]
