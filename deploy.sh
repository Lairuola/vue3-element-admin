#!/usr/bin/env sh

# 发生任何错误时终止
set -e

# 部署
git add .
git commit -m 'feat: :memo: Add new features'
git push origin master

cd -