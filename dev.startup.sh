# #!/bin/sh

# # 这是一个shebang行，告诉操作系统这个脚本应该使用/bin/sh—即shell—来执行。
# MIGRATION_STATUS=$(npx prisma migrate status)

# # 这行执行npx prisma migrate status命令，它检查Prisma迁移的状态，并将输出结果赋值给变量MIGRATION_STATUS。Prisma是一个数据库工具，用于处理数据模型的迁移和访问。
# if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
#     echo "No migrations needed."
# else
#     echo "Running migrations..."
#     npx prisma migrate deploy
# fi

# # 执行npx prisma migrate deploy命令来部署数据库迁移 无论是否执行了迁移，接下来都会执行npx prisma generate命令，这通常用于生成Prisma客户端，这是与数据库交互的代码。
# npx prisma generate

# # 这段代码检查当前目录下是否存在特定的锁文件，来决定使用哪个包管理器来启动项目。锁文件确保了在不同环境中能安装到相同版本的依赖。
# if [ -f yarn.lock ]; then 
#     yarn dev;
# elif [ -f package-lock.json ]; then 
#     npm run dev;
# elif [ -f pnpm-lock.yaml ]; then 
#     pnpm dev;
# else 
#     npm run dev;
# fi


#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running migrations..."
    npx prisma migrate deploy
fi

node server.js