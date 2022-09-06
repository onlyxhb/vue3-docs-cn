#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run build

# 进入待发布的目录
cd .vitepress/dist

# 如果是发布到自定义域名
echo 'https://docs.onlystar.site/vue3-docs-cn/' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:onlyxhb/vue3-docs-cn.git master:gh-pages

cd -
