# GitBook

#### 安装

- 安装 gitbook-cli，执行后续 gitbook 命令会自动安装最新版本的 gitbook

```shell script
npm install gitbook-cli -g
```
- 初始化书籍目录，
    1. 初次执行生成 README.md 和 SUMMERY.md 文件；
    2. 手动修改 SUMMERY.md 的目录结构，再次执行，则会自动生成新增目录结构中的文件；

```shell script
gitbook init
```

- 编译和预览书籍

```shell script
gitbook serve
```

- 编译

```shell script
gitbook build
```

- 安装定义在 book.json 中的 plugin

```shell script
gitbook install
```

- 查看安装版本

```shell script
gitbook -V
```