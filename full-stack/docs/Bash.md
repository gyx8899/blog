# Bash: 入门重点

## Command List

(Not work in windows dos)

- Enter

```shell
bash
```
- Exit

```shell
exit
```
- Current dir: get current folder path

```shell
pwd
currentPath=$PWD
> /d/Workspace/github/blog
```

- Get parent path

```shell
dirname $PWD
> /d/Workspace/github
```

- Get parent folder name

```shell
basename $PWD
> blog
```

- Get all files/folders in current folder

```shell
dir
> dos-netstat-80.bat  git-global-user.sh  git-registry-taobao.sh  package.json
> git-commit.sh       git-local-user.sh   git-remote-template.sh  README.md
> git-commit-push.sh  git-pull-rebase.sh  LICENSE                 yx-env.iml
```

- Get all files/folders, folder has last slash /

```shell
ls
> blog/      npm-template/  yx-app/  yx-js/          yx-node/
```

- Get parent folder

```shell
folder=$(basename $PWD)
echo ${folder}
```

- Get parent's parent folder 

```shell
parentFolder=$(basename $(dirname $PWD))
echo ${parentFolder}
```

- Iterate folder's files and sub-folder

```shell
$ for f in *; do 
  echo $f; 
done
$ for f in $(dir); do 
  echo $f; 
done
```

- Stop exit with flash when exec to the end of bash

```shell
exec bash
```

- Multi-Line string variable

```shell
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

- Get value from output string
```shell
template=$(git remote | grep template);

if [[ $template != template ]]; then
	git remote add template $REPO
fi
```

## Questions

* unary operator expected: 表达式左边有可能为空，则表达式左侧就为空，报错

```shell
# [: !=: 
if [ "${filename}" != 'README.md' ]; then

fi
```

* unary operator expected: 判断不等，加上双中括号

```shell
# [: !=: 
if [[ "${filename}" != 'README.md' ]]; then

fi
```

* unary operator expected: 判断空，用双中括号和单等号

```shell
# [: !=: 
if [[ "${filename}" = '' ]]; then

fi
```

## Error 

- code ELIFECYCLE errno 1

```shell
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! blog@1.0.0 git-push-mac: `node ./assets/scripts/add-timestamp.js file=. && cd ../yx-env && bash git-push.sh blog`
npm ERR! Exit status 1
```