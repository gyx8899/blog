# GitBook

## 安装
```shell script
# 安装 gitbook-cli，执行后续 gitbook 命令会自动安装最新版本的 gitbook
npm install gitbook-cli -g

# 初始化书籍目录，
# 1. 初次执行生成 README.md 和 SUMMERY.md 文件；
# 2. 手动修改 SUMMERY.md 的目录结构，再次执行，则会自动生成新增目录结构中的文件；
gitbook init

# 编译和预览书籍
gitbook serve

# 只编译
gitbook build

# 安装定义在 book.json 中的 plugin
gitbook install

# 查看安装版本
gitbook ls
```