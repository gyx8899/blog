# Mac 

## Terminal

### Commands

- ls
- mkdir
- cd [dir]
- cd .. 
- rm [dir] (空目录)
- rm -rf [dir] (支持非空/空目录，不会出现在废纸篓里)
- touch [file.ext]
- rm [file.ext]
- cp [fromFile.ext] [newFile.ext]
- find *.txt
- pwd
- open [dir]
- clear

## Vim

ESC 跳到命令模式

- :w   保存
- :w file  保存到另一文件
- :w!  强制保存
- :wq  保存+退出
- :wq! 保存+强制退出
- :q   不保存+退出
- :q!  不保存+强制退出

## Folder 文件夹

- 显示文件夹中隐藏的文件快捷键：Command + Shift + .

## Fault 故障

- Chrome 网页视频播放器无声音（蓝牙耳机断开后）

解决方法：打开“活动监视器”，找到 `coreaudiod`，点击窗口上的关闭按钮，关闭后会自动重启，问题解决了。