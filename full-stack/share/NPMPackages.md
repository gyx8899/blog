# NPM 包

## 常用工具

### ChangeLog

1. 安装依赖包：`npm i --save-dev conventional-changelog conventional-changelog-cli`
1. 添加 npm script 到 package.json
    > "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    >
    > "changelog-init": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"

1. 执行
