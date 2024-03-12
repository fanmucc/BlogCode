# 引用node18版本及以上
FROM node:18-alpine

# RUN apt-get update -y
# RUN apt-get install -y openssl

# 创建工作区目录 app
WORKDIR /app

# 将构建上下文中的所有文件和目录复制到容器的app目录下
COPY . .

# 指定node源
RUN npm i --registry=https://registry.npmmirror.com;

# 修改相关脚本文件权限，使其成为可以执行的文件
RUN chmod +x /app/dev.startup.sh

# 设置容器启动时执行的命令 当容器启动时则执行此脚本
ENTRYPOINT ["sh", "/app/dev.startup.sh"]