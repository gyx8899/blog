# DOS command

## 常见内部命令

- change directory: 
```shell
cd directoryName
```

- show directory content: 
```shell
dir
```

- create directory: 
```shell
md directoryName
```

- remove directory: 
```shell
rd directoryName
```

- copy dir/file A to dir/file B: 
```shell
copy A B
```

- delete dir or file
```shell
del directoryName
del directoryName/fileName
del fileName
```

- clear screen: 
```shell
cls
```

- re-name dir/file: 
```shell
ren
```

- copy dir/file:
```shell
# 注意全大写的 COPY
COPY directoryName
COPY fileName
```

- 改变当前盘符: 
```shell
c:
d:
e:
```

- .bat 执行闪退情况，添加 pause，提示：请按任意键继续...: 
```shell
pause
```

## 常见问题及解决方案

- 80 端口占用 (Windows)

    - 查看所有网络端口使用
    
    ```shell
    netstat -ano
    
    协议  本地地址          外部地址        状态           PID
    TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       4
    ``` 

    - netsh http show servicestate
    
    ```shell
    HTTP://+:80/REPORTSERVER_SQLEXPRESS/
    HTTP://+:80/REPORTS_SQLEXPRESS/
    进程 ID:
        4116
    ```
    - 在任务管理器 - 服务 - ID:4116 - 右键关闭该进程, 已遇到的服务有：SQLServer, Skype, VMware 等；
    - [dos-netstat-80.bat](https://github.com/gyx8899/yx-env/blob/master/dos-netstat-80.bat)
