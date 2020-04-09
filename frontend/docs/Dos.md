# DOS command

## 常见内部命令

```shell script
# change directory 
cd directoryName

# show directory content
dir

# create directory
md directoryName

# remove directory
rd directoryName

# copy dir/file A to dir/file B
copy A B

# delete dir or file
del directoryName
del directoryName/fileName
del fileName

# clear screen
cls

# re-name dir/file
ren 

# copy dir/file
- COPY directoryName
- COPY fileName

# 改变当前盘符
c:
d:
e:

# .bat 执行闪退情况，添加 pause，提示：请按任意键继续...
pause
```

## 常见问题及解决方案
- 80 端口占用 (Windows)
    - 查看所有网络端口使用
    ```shell script
    netstat -ano
    
    协议  本地地址          外部地址        状态           PID
    TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       4
    ``` 
    - netsh http show servicestate
    ```shell script
    HTTP://+:80/REPORTSERVER_SQLEXPRESS/
    HTTP://+:80/REPORTS_SQLEXPRESS/
    进程 ID:
        4116
    ```
    - 在任务管理器 - 服务 - ID:4116 - 右键关闭该进程
    - [netstat-80.bat](../../assets/batches/netstat-80.bat)


最后更新于2020年4月9日

[^footnote]: timestamp-最后更新于2020年3月25日
