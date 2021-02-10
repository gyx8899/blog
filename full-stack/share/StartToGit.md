# StartToGit

## Steps

1. [Download](https://git-scm.com/downloads) & Install Git

1. [Download Github Desktop](https://desktop.github.com/)
    
1. [使用 SSH 连接到 GitHub](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh)
    - 关于 SSH
    - 检查现有的 SSH 密钥
    - 生成新的 SSH 密钥并添加到 ssh-agent
    - 新增 SSH 密钥到 GitHub 账户
    - 测试 SSH 连接
    - 使用 SSH 密钥密码

1. Clone repo 并测试提交改动，验证提交通过，无需输入账号密码
   - modify file 
   - git add . 
   - git commit -m ""
   - git push

## History log

```shell
Guo@Guo-PC MINGW64 ~/Desktop
$ ls -al ~/.ssh
ls: cannot access '/c/Users/Guo/.ssh': No such file or directory

Guo@Guo-PC MINGW64 ~/Desktop
$ ssh-keygen -t ed25519 -C "gyx8899@126.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/c/Users/Guo/.ssh/id_ed25519):
Created directory '/c/Users/Guo/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Guo/.ssh/id_ed25519
Your public key has been saved in /c/Users/Guo/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:******************************************** gyx8899@126.com
The key's randomart image is:
+--[ED25519 256]--+
|           ******|
|          *******|
|         ********|
|         ********|
|        *********|
|        *********|
|         ********|
|              ***|
|               **|
+----[SHA256]-----+

Guo@Guo-PC MINGW64 ~/Desktop
$ eval 'ssh-agent -s'
SSH_AUTH_SOCK=/tmp/ssh-tLCshDnx4NI5/agent.784; export SSH_AUTH_SOCK;
SSH_AGENT_PID=785; export SSH_AGENT_PID;
echo Agent pid 785;

Guo@Guo-PC MINGW64 ~/Desktop
$ ssh-add ~/.ssh/id_ed25519
Could not open a connection to your authentication agent.

# Check and confirm Github client has been installed

Guo@Guo-PC MINGW64 ~/Desktop
$ ssh-add ~/.ssh/id_ed25519
Identity added: /c/Users/Guo/.ssh/id_ed25519 (gyx8899@126.com)

Guo@Guo-PC MINGW64 ~/Desktop
$ clip < ~/.ssh/id_ed25519.pub

Guo@Guo-PC MINGW64 ~/Desktop
$ ssh -T git@github.com
The authenticity of host 'github.com (52.74.223.119)' can't be established.
RSA key fingerprint is SHA256:*******************************************.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
Hi gyx8899! You've successfully authenticated, but GitHub does not provide shell access.

```

## Problems

- Could not open a connection to your authentication agent.
```shell
# Start ssh-agent fix auth issue
ssh-agent bash
```