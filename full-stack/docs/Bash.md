# Bash: 入门重点
[TOC]

##### Command List
(Not work in windows dos)
- Enter

```shell script
bash
```
- Exit

```shell script
exit
```
- Current dir: get current folder path

```shell script
pwd
currentPath=$PWD
> /d/Workspace/github/blog
```

- Get parent path

```shell script
dirname $PWD
> /d/Workspace/github
```

- Get parent folder name

```shell script
basename $PWD
> blog
```

- Get all files/folders in current folder

```shell script
dir
> dos-netstat-80.bat  git-global-user.sh  git-registry-taobao.sh  package.json
> git-commit.sh       git-local-user.sh   git-remote-template.sh  README.md
> git-commit-push.sh  git-pull-rebase.sh  LICENSE                 yx-env.iml
```

- Get all files/folders, folder has last slash /

```shell script
ls
> blog/      npm-template/  yx-app/  yx-js/          yx-node/
```

- Get parent folder

```shell script
folder=$(basename $PWD)
echo ${folder}
```

- Get parent's parent folder 

```shell script
parentFolder=$(basename $(dirname $PWD))
echo ${parentFolder}
```

- Iterate folder's files and sub-folder

```shell script
$ for f in *; do 
  echo $f; 
done
$ for f in $(dir); do 
  echo $f; 
done
```

- Stop exit with flash when exec to the end of bash

```shell script
exec bash
```

- Multi-Line string variable

```shell script
newline=$'\n'
newline2=$'\x0a'

multiLineStr1="$newline Title $newline Description $newline"
multiLineStr1+="second line"
echo "$multiLineStr1"

multiLineStr2="first line"
multiLineStr2+="$newline2"
multiLineStr2+="Second line"
echo "$multiLineStr2"
```

#### Questions

* unary operator expected: 表达式左边有可能为空，则表达式左侧就为空，报错
```shell script
[: !=: 
if [ "${filename}" != 'README.md' ]; then

fi
```

* unary operator expected: 判断不等，加上双中括号

```shell script
[: !=: 
if [[ "${filename}" != 'README.md' ]]; then

fi
```

* unary operator expected: 判断空，用双中括号和单等号

```shell script
[: !=: 
if [[ "${filename}" = '' ]]; then

fi
```
