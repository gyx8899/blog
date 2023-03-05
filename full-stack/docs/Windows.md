# Windows 之路遇精彩

## 踩过的坑

- 鼠标右键无响应（卡死） - windows 资源管理器 无响应

    解决的方案：

    由于在资源管理器的“快速访问”中添加了对局域网某台测试服务器\\192.168.xx.xx\d$的快速访问链接，现在工作网络变化，已经不能访问这些链接。删除这些不能访问的链接，卡死的未响应问题解决了。

- Windows 自带输入法无意中触发繁体字，重新切换会简体字

    解决方法：`Ctrl + Shift + F`

- windows 添加绿色软件到开机自启

  - 绿色软件放置固定位置，如：D:\Program Files
  - 右键软件，点击发送快捷键置桌面
  - 剪切桌面上的快捷键
  - 粘贴到 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp` (电脑的路径可能显示中文，如【开始】菜单)
  - `Ctrl + Alt + Del` 打开任务管理器 - 启动 - 查看对应软件的启动状态

- Chrome CROS 跨域问题（本机其他浏览器/其他电脑没有此问题）

    1. 地址栏输入：chrome://flags/#block-insecure-private-network-requests
    1. 搜索 `Block insecure private network requests` 并设置为 disabled，点击页面右下角按钮重启浏览器

## 惊艳的小操作

- 在 window 某个文件夹的路径中，输入 cmd/powershell 即可快速打开“命令行”/powershell 窗口。

    特点： 打开的 cmd/powershell，自动定位在当前文件夹。节省 `cd [dir]` 到相应目录。

- （wind10）重新排列显示器：告诉电脑，你的多个显示器的位置-上下左右，可拖动。

    操作：右键桌面 - 显示设置 - 重新排列显示器，拖动主副显示器的上下左右位置。MaMa 再也不用担心你找不到鼠标光标了。