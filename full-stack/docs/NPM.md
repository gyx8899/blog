# NPM and Plugin Guide

---

## 版本

- NPM

## package.json

### peerDependency

<https://docs.npmjs.com/cli/v6/configuring-npm/package-json#peerdependencies>

> In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a require of this host. This is usually referred to as a plugin. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.
>
> 通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用peerDependencies去声明一下需要依赖的插件和版本，如果出问题npm就会有警告来提醒使用者去解决版本冲突问题。(翻译出处之一)

## NPM 日常使用

### 新建项目

```shell
# Commands tested on windows
mkdir projectName
cd projectName

# 1. 根据提示输入，一步一步创建 package.json;
npm init

# 2. 直接初始化一个默认的 package.json (y = yes)
npm init -y

mkdir src
cd src
echo off > index.js
```

### 常用命令

```shell
nvm -v //检查nvm是否安装成功

Running version 1.1.7.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                 Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                 Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.

```

## 基本用法

- 安装包，查看包信息

```shell
# Dependency package
npm install <packageName>
npm install <packageName> -f
npm install <packageName> --force

# Dev dependency package
npm install --save-dev <packageName>

npm update <packageName>

npm view react
npm view 的别名
npm info react
npm show react
npm v react
```

- Install webpack webpack-cli

```shell
# 安装多插件到开发环境依赖
npm install webpack webpack-cli --save-dev
# 简写 i = install, 简写 -D = --save-dev, 简写 -S = --save
npm i webpack webpack-cli --save-dev
npm install webpack webpack-cli -D

# dependency
npm i webpack --save
# global
npm i -g webpack
```

- Publish NPM package

```shell
# 1. Create your custom package project with package.json;

# 2. Export your package in index.js;
module.exports = customPackage;

# 3. Login, input your NPM account username, password, email
npm login

# 4. Publish
npm publish

# 5. Update
npm version patch
npm version minor
npm version major
npm publish

# 6. 撤销
npm --force unpublish npm-event@1.0.1
```

- NPM Link: Test packages before publish

```shell script
# cd yx-node
# Go to package directory, such as @daybyday/yx-node
# Generate package link
npm link

# cd blog
# Go to your test project which use your package
# Add link to project package.json
npm link @daybyday/yx-node

# You can test it now.
```

- Config

```shell script
# package version prefix
npm config set save-exact true  # 最高优先
npm config set save-prefix "~"  # 注意双引号
npm config set save-prefix "^"  # 注意双引号, 默认值

# 查看安装包的版本与最新版本比较
npm outdate
#Package                    Current   Wanted   Latest  Location
#@hot-loader/react-dom      16.13.0  16.14.0   17.0.1  xx
#@testing-library/jest-dom   5.11.1   5.11.9   5.11.9  xx
#dayjs                       1.10.3   1.10.4   1.10.4  xx
#enzyme-adapter-react-16     1.15.2   1.15.6   1.15.6  xx
#intersection-observer       0.11.0   0.11.0   0.12.0  xx
#lodash                     4.17.19  4.17.20  4.17.20  xx

# 查看 npm 安装路径
npm config get prefix
C:\Users\xxxx\AppData\Roaming\npm
```

- 场景示例

```shell
# script 参数
npm build --param1 123
```

## 问题列表

- npm ERR! Unexpected end of JSON input while parsing near '....0.0","inherits":"^2.'

```shell
npm clean cache --force
```

- [exit status 1: 'C:\Program' is not recognized as an internal or external command](https://github.com/coreybutler/nvm-windows/issues/168)

> The problem is with the spaces in URL(C:\Program Files). Try to install the nvm directly in C:/ or in other folder without spaces in the PATH.

- 发布 NPM 包版本时： npm ERR! 403 403 Forbidden - PUT * - [no_perms] Private mode enable, only admin can publish this module

> registry 配置项被修改为非 npmjs, 需要重新设置为 npmjs

```shell
npm config set registry https://registry.npmjs.org
```

- Git set custom registry when group is using cnpm

```shell
# Just only set @xx/xxxxxx for your group's components;
npm config set "@xx:registry" https://npm.xxxxxx.net.cn:/

# Reset default npm registry
npm config set registry https://registry.npmjs.org
# Reset Taobao npm registry
npm config set registry https://registry.npm.taobao.org/
```

- npm ERR! code E401
  npm ERR! 401 Unauthorized - PUT <https://xxx> - [unauthorized] Login first

> 可能是 cnpm 和 npm 设置 registry 的变更导致已登录账号的信息在另外的环境上，暂时是通过修改账号名的方式解决。
[npm ERR! 409 Conflict - PUT https://[cnpm]/-/user/org.couchdb.user:[username] - [conflict] User [username] already exists · Issue #1607 · cnpm/cnpmjs.org](https://github.com/cnpm/cnpmjs.org/issues/1607)

- npm ERR! cb() never called!

```shell script
# 删除代理
npm config rm proxy
npm config rm https-proxy
```

- TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined

> throw new ERR_INVALID_ARG_TYPE(name, 'string', value);

```shell script
# (C:\Users\xxx\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
# const NRMRC = path.join(process.env.HOME, '.nrmrc');
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
```

- npm i -g whistle 后 w2 start 的 error

```shell script
# 无法加载文件 C:\Users\xxx\AppData\Roaming\npm\w2.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.
# microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
# 所在位置 行:1 字符: 1
```

```shell
  # 1. 以理员身份打开 powershell
  # 2. 输入 `set-ExecutionPolicy RemoteSigned`
  # 3. 输入 Y
  # 4. 重试 w2 start
```

## NVM: Node version manager

### 镜像设置

在使用nvm安装node的过程中如果速度太慢的话，可以设置改用淘宝的镜像地址

在nvm安装目录下的setting.txt文件中加入以下代码

```shell
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

### 安装 NVM

#### Windows

> coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.

1. Uninstall all node;
2. Download and install nvm; (windows: nvm-setup.zip)
[nvm-windows](https://github.com/coreybutler/nvm-windows)
3. Check and find usage;

#### Mac

[macOS 上使用 brew 安装 NVM 管理 node.js](https://qizhanming.com/blog/2020/07/29/how-to-install-node-using-nvm-on-macos-with-brew)

## 参考