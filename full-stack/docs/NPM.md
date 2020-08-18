# NPM and Plugin Guide

---

## Init project
```shell script
# Commands tested on windows
mkdir projectName
cd projectName
npm init -y
mkdir src
cd src
echo off > index.js
```

## NVM: Node version manager

### 镜像设置
在使用nvm安装node的过程中如果速度太慢的话，可以设置改用淘宝的镜像地址

在nvm安装目录下的setting.txt文件中加入以下代码
```shell script
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

### Install
> coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.

1. Uninstall all node;
2. Download and install nvm; (windows: nvm-setup.zip)
[nvm-windows](https://github.com/coreybutler/nvm-windows)
3. Check and find usage;
```shell script
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

## Base cases
```shell script
npm install <packageName>
npm install <packageName> -f
npm install <packageName> --force

npm update <packageName>

npm view react
npm view 的别名
npm info react
npm show react
npm v react

# Not work
npm cache ls react
# But return
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <git url>
npm cache add <name>@<version>
npm cache clean
npm cache verify
npm cache clean

# Publish NPM package
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

### Install cases

> Init package.json 
```shell script
# Step by step: info
npm init

# Init with all default value in package.json (y = yes)
npm init -y
```

> Install webpack webpack-cli
```shell script
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

## Questions

##### npm ERR! Unexpected end of JSON input while parsing near '....0.0","inherits":"^2.'
```shell script
npm clean cache --force
```

- [exit status 1: 'C:\Program' is not recognized as an internal or external command](https://github.com/coreybutler/nvm-windows/issues/168)
> The problem is with the spaces in URL(C:\Program Files). Try to install the nvm directly in C:/ or in other folder without spaces in the PATH.

##### 发布 NPM 包版本时： npm ERR! 403 403 Forbidden - PUT * - [no_perms] Private mode enable, only admin can publish this module

> registry 配置项被修改为非 npmjs, 需要重新设置为 npmjs
```shell script
npm config set registry https://registry.npmjs.org
```

##### Git set custom registry when group is using cnpm
```shell script
# Just only set @xx/xxxxxx for your group's components;
npm config set "@xx:registry" https://npm.xxxxxx.net.cn:/

# Reset default npm registry
npm config set registry https://registry.npmjs.org
# Reset Taobao npm registry
npm config set registry https://registry.npm.taobao.org/