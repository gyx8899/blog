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
pwd
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

最后更新于2020年4月23日
