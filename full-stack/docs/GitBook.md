# GitBook

## 安装
```shell script
npm install gitbook -g

# 初始化书籍目录，
# 1. 初次执行生成 README.md 和 SUMMERY.md 文件；
# 2. 手动修改 SUMMERY.md 的目录结构，再次执行，则会自动生成新增目录结构中的文件；
gitbook init

# 编译和预览书籍
gitbook serve