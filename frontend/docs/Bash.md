# Bash
[TOC]

## Command
(Not work in windows dos)
- Enter
```shell script
bash
```
- Exit
```shell script
exit
```
- Current dir
```shell script
# get current folder path
pwd
> /d/Workspace/github/blog

# get parent path
dirname $PWD
> /d/Workspace/github

# get parent folder name
basename $PWD
> blog

# get all files/folders in current folder
dir
> dos-netstat-80.bat  git-global-user.sh  git-registry-taobao.sh  package.json
> git-commit.sh       git-local-user.sh   git-remote-template.sh  README.md
> git-commit-push.sh  git-pull-rebase.sh  LICENSE                 yx-env.iml

# get parent folder
folder=$(basename $PWD)
echo ${folder}

# get parent's parent folder 
parentFolder=$(basename $(dirname $PWD))
echo ${parentFolder}

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

## Questions
- [: !=: unary operator expected
```shell script
if [ "${filename}" != 'README.md' ]; then
# 表达式左边有可能为空，则表达式左侧就为空，报错
fi
```
```shell script
if [[ "${filename}" != 'README.md' ]]; then
# 判断不等，加上双中括号
fi
if [[ "${filename}" = '' ]]; then
# 判断空，用双中括号和单等号
fi
```

最后更新于2020年5月8日
