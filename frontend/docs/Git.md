# Git 命令集
![Git flow](../../assets/images/git-tool.png)

- 初始化一个空的 Git 仓库 demo
```shell script
mkdir demo
cd demo
git init
```

- 克隆项目基本操作
```shell script
# 克隆 HTTPS
git clone https://github.com/gyx8899/YX-JS-ToolKit.git
    # 克隆并更改“YX-JS-ToolKit”默认文件夹名为 newProjectName
    git clone https://github.com/gyx8899/YX-JS-ToolKit.git newProjectName
cd YX-JS-ToolKit

# 查看本地仓库内容状态
git status
    # s-short b-branch
    git status -sb

# 查看本地仓库提交记录
git log
    # 查看详细历史 -p  -patch
    git log -p
    # 查看简要统计
    git log --stat
    # 查看单行日志信息
    git log --pretty=oneline
    9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile
    # 查看单行日志信息（哈希值前7位）
    git log --oneline
    9fceb02 updated rakefile
    # 在所有提交日志中搜索包含「homepage」的提交
    git log --all --grep='homepage'
    # 获取某人的提交日志
    git log --author="Maxence"

# 获取所有操作历史
git reflog

# 查看当前 commit
git show
    # 查看任意一个 commit: branch 或 HEAD 标记 或 SHA-1 码
    git show 5e68b0d8
    # 查看指定 commit 中的指定文件
    git show 5e68b0d8 shopping\ list.txt

# 添加工作区改动文件到 Stage (暂存区)
git add A.txt
git stage A.txt
    # 添加工作区所有改动文件到 Stage（暂存区）
    git add .
    # 将所有修改过的文件加入 Stage
    git add -u
    # 将本地删除文件、新增文件都提交到 Stage
    git add -a
    # 可以对一个文件内的修改选择性的添加 Stage
    git add -p

# 提交工作区改动到本地仓库（代码库）
git commit
    # 0. 进入 Comment 添加模式
    # 1. 点击键盘键 i 
    # 2. 输入改动 Comment 注解
    # 3. 点击键盘键 Esc
    # 4. 鼠标点击 cmd 区域，将焦点重新聚焦 cmd
    # 5.1 dos 模式 - Shift + Z, Shift + Z, 两次退出 Comment 编辑模式
    # 5.2 vim 模式 - 1. ESC, 2. :set noreadonly 3. :wq  (root 权限 :wq!)
    # 简化 commit 的命令 -m
    git commmit -m "Comment text"


# 推送本地仓库改动到远程仓库（代码库）
git push
    # 推送本地仓库改动到远程 origin 仓库的 feature1 分支
    git push origin feature1

# 只需要再输入一次密码， Git 就会把你的密码保存下来，之后不用输入了
git config credential.helper store

# 从中央仓库拉取最新文件到本地仓库
git pull
        # git pull 等于 fetch 和 merge 两条命令
        git fetch
        git merge FETCH_HEAD
    # + rebase
    git pull --rebase

# 对比工作区和暂存区
git diff
    # 对比工作区和上一条版本库提交
    git diff HEAD
    # 对比暂存区和上一条版本库提交
    git diff --staged
```

- 分支操作
```shell script
## 创建分支
git branch_name
    # 切换分支
    git checkout branch_name
    # 创建并切到分支
    git checkout -b branch_name
    # 跳到之前的分支
    git checkout -
    # 删除分支
    git branch -d branch_name
    # 查看分支 (a: all, r: remote, show-branch: and commits)
    git branch -a
    git branch -r
git show-branch

## 合并分支: 分支仓库 branchA 合并 master 的内容
# 1. 拉取最新的 master；
git checkout master
git pull
# 2. 切到本地仓库合并 feature1
git checkout branchA
git merge master
  # 1. 冲突时，解决冲突文件
  git add conflict_file.txt
  git commit
  # 2. 冲突时，放弃合并
  git merge --abort 

# 先把 branch 的基准更新到 master 的最新，再把 branch 上的提交记录，再在最新位置上重新提交
git checkout branch1
git rebase master
# 再把 branch1 合并到 master
git checkout master
git merge branch1

# 上传本地创建的分支到远程仓库
git push --set-upstream origin branch1

# 合并 remote template/master
# 1. 添加 remote template
git remote add template https://github.com/gyx8899/npm-template.git
# 2. 拉取 master, template, branches 所有远端的最新文件到本地
git fetch --all
# 3. 合并 template 的 master 到本地仓库
git merge template/master --allow-unrelated-histories
# 4. 处理冲突
...
```

- Feature branching 工作流 - 方式1-靠吼
```shell script
## User A
git checkout -b feature2
git add .
git commit
git push origin feature2

## User B 查看后说通过
git pull
git checkout feature2

## User A
git checkout master
git pull
git merge feature2
git push
git branch -d feature2
# 上面两行等价下面一行
git push origin -d feature2

```
- Feature branching 工作流 - 方式2-Pull Request

- 修正
```shell script
# 用这一次新的commit, 合并上一次 commit。进而达到修复上一次 commit 的 comment 内容
git add .
git commit --amend

# rebase --interactive 的缩写，交互式 rebase，
git rebase -i HEAD^^
git rebase -i HEAD~5
# 继续 rebase, 把后面的 commit 应用上去。
git rebase --continue
```
> 说明：在 Git 中，有两个「偏移符号」： ^ 和 ~。
>
> ^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。例如：master^ 表示 master 指向的 commit 之前的那个 commit； HEAD^^ 表示 HEAD 所指向的 commit 往前数两个 commit。
>
> ~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。例如：HEAD~5 表示 HEAD 指向的 commit往前数 5 个 commit。

> Rebase 816f737..b13037a onto 816f737 (1 command)
> 
> Commands:
> p, pick = use commit
> r, reword = use commit, but edit the commit message
> e, edit = use commit, but stop for amending
> s, squash = use commit, but meld into previous commit
> f, fixup = like "squash", but discard this commit's log message
> x, exec = run command (the rest of the line) using shell
> d, drop = remove commit
>
> These lines can be re-ordered; they are executed from top to bottom.
>
> If you remove a line here THAT COMMIT WILL BE LOST.
>
> However, if you remove everything, the rebase will be aborted.
>
> Note that empty commits are commented out

- 撤销commit
```shell script
# 撤销前某一次提交, 把编辑区域中想删掉的那一次 commit comment 删掉即可。
git rebase -i HEAD^   #撤销最后1次
git rebase -i HEAD^^  #撤销最后2次
git rebase -i HEAD~5  #撤销最后5次
# 丢弃上一次提交 --hard
git reset --hard HEAD^
# 以倒数第二个 commit 为起点（起点不包含在 rebase 序列里哟），branch1 为终点，rebase 到倒数第三个 commit 上。
git rebase --onto HEAD^^ HEAD^ branch1
```

- 撤销已在中央仓库的 branch 的 commit
```shell script
# 先在本地仓库 branch 使用上面的 撤销 commit, 再强制提交到 branch。--force, 忽略冲突强制 push
git push origin branch1 -f
```

- 撤销已在中央仓库的 master 的 commit, 只是新增一条 revert commit
```shell script
# 撤销 commit
git revert HEAD^
```
> 如果出错内容在私有 branch：在本地把内容修正后，强制 push (push -f）一次就可以解决；
> 
> 如果出错内容在 master：不要强制 push，而要用 revert 把写错的 commit 撤销。

- 重置回退
```shell script
# 重置回退并保留工作目录的内容，并清空暂存区。
git reset HEAD^
    git reset CommitHashValue
    # 重置回退并清空工作目录的所有改动
    git reset --hard HEAD^
    git reset --hard CommitHashValue
    # 重置回退并保留工作目录和暂存区的内容，并把重置 HEAD 的位置所导致的新的文件差异放进暂存区
    git reset --soft HEAD^
    git reset --soft CommitHashValue
    # 重置到相应提交
    git reset HEAD@{4}
    # ……或者……
    git reset --hard <提交的哈希值>
```
> --hard：重置位置的同时，清空工作目录的所有改动；
>
> --soft（常用）：重置位置的同时，保留工作目录和暂存区的内容，并把重置 HEAD 的位置所导致的新的文件差异放进暂存区。
>
> --mixed（默认）：重置位置的同时，保留工作目录的内容，并清空暂存区。

- Checkout
```shell script
git checkout HEAD^^
git checkout master~5
git checkout 78a4bc
git checkout 78a4bc^
# 用来只让 HEAD 和 branch 脱离而不移动 HEAD 的用法
git checkout --detach
```

- Stash(暂存区): 临时存放工作目录的改动
```shell script
# 将工作区的改动保存到暂存区，工作区还原至上次commit
git stash
# 没有被 track 的文件（即从来没有被 add 过的文件不会被 stash 起来，因为 Git 会忽略它们。如果想把这些文件也一起 stash，可以加上 `-u` 参数，它是 `--include-untracked` 的简写。
git stash -u
# 显示之前 stash 的所有记录
git stash list
# 清空 git stash
git stash clear
# 读取并恢复上次暂存的代码改动
git stash apply
git stash pop
```

- 重建已删除的 branch1
```shell script
# 从 log 中查找已删除 branch1 的 SHA-1
git reflog
git checkout c08de9a
git checkout -b branch1

# 查看某个 branch 上的移动历史
git reflog master
```

- tag
```shell script
# 查看 History 中已有的 tag
git tag 
v0.1
v1.3

# 查看特定模式的 tag
git tag -l 'v1.8.5*'
v1.8.5
v1.8.5-rc0   # rc = Release Candidate
v1.8.5-rc1
v1.8.5.1
v1.8.5.2

# 两种标签：轻量标签（简单 - lightweight）和附注标签（详细 - annotated）
# 轻量标签
git tag v1.4.0
# 附注标签
git tag -a v1.4.1 -m "my version v1.4.1"

# 查看具体标签信息
git show v1.4.1

# 某次提交忘记打标签，后期补打标签
# 1. 查找提交记录
git log --oneline
9fceb02 updated rakefile
# 2. 补打标签 + 校验和（或部分校验和）
git tag -a v1.4.2 9fceb02

# 共享标签，即推送标签到远程仓库
git push orgin v1.4.2   # 推送指定的标签
git push orgin --tags   # 推送所有本地的标签

# 删除本地标签
git tag -d v1.4.1
# 将删除的本地标签，推送到远程仓库
git push origin :refs/tags/v1.4.1

# checkout 分支到指定 tag
git checkout -b version2 v2.0.0
```

- cherry-pick
```shell script
git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff] [-S[<keyid>]] <commit>…​
git cherry-pick (--continue | --skip | --abort | --quit)

# 取另一个分支的一个提交记录id，在本分支上重新提交
git cherry-pick <commit id>
# 取另一个分支的一个提交记录id，在本分支上重新提交并保留原分支的提交信息
git cherry-pick -x <commit id>
# 取另一个分支的一段区间(左开右闭（])提交记录，在本分支上重新提交
git cherry-pick <start-commit-id>..<end-commit-id>
# 取另一个分支的一段区间(左闭右闭[])提交记录，在本分支上重新提交
git cherry-pick <start-commit-id>^..<end-commit-id>
# 也可以用在同一个分支上，场景为某次提交删除了，需要重新提交，可以使用 cherry-pick
```

- Pull changes from a template repository
```shell script
# 1. Add this template repository as a remote
# git remote add template [URL of the template repo]
git remote add template https://github.com/gyx8899/npm-template.git

# 2. Update the remote changes
git fetch --all

# 3. Merge another branch from the new remote to your current one
# git merge template/[branch to merge] --allow-unrelated-histories
git merge template/master --allow-unrelated-histories
```

- 更改远程仓库 URL
```shell script
# 更改
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
# 查看
git remote -v
```

- Questions
    - SSL_read: SSL_ERROR_SYSCALL, errno 10054
    ```shell script
    YX-JS-ToolKit\docs>git push
    fatal: unable to access 'https://github.com/gyx8899/YX-JS-ToolKit.git/': Op
    enSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
    ```
    ```shell script
    git config http.sslVerify "false"
    git config --global http.sslVerify "false"
    git push
    Username:
    Password:
    ```
  
    - remote: HTTP Basic: Access denied
      fatal: Authentication failed for 'Your remove url'
    ```shell script
    # 方案1（来自网络）
    git config --system --unset credential.helper
    # 方案2（来自网络）
    git config --global http.emptyAuth true
    ```
    > 方案3：第一次输入账号密码错误后，#1 和 #2 都不行的情况下，到“控制面板\用户帐户\凭据管理器\Windows凭据”下删除对应 git 的凭据，然后继续尝试 git clone 命令，会重新提示输入用户名和密码。
         
    - Github, Gitlab, Gitee, 多账号管理 - 提交时的用户选择
    ```shell script
    # 设置全局账号
    git config --global user.name "Steper Kuo @github"
    git config --global user.email "gyx8899@126.com"
    # 设置局部账号, 需要在每个 gitlab 项目下都设置一次
    git config --local user.name "Steper Kuo @gitlab"
    git config --local user.email "gyx8899@126.com"
    # 设置局部账号, 需要在每个 gitee 项目下都设置一次
    git config --local user.name "Steper Kuo @gitee"
    git config --local user.email "gyx8899@126.com"
    ```
 
    - Could not merge origin/master: You have not concluded your merge (MERGE_HEAD exists). Please, commit your changes before you merge.
    ```shell script
    # 方案：保留本地。终止合并 -》 重新合并 -》 重新拉取
    git merge --abort
    git reset --merge
    git pull
    ```
    
    - Your local changes to the following files would be overwritten by merge: Please commit your changes or stash them before you merge.
    ```shell script
    git stash
    git pull origin master  #== git fetch + get merge
    git stash pop
    ```
  
    - `git merge master` fatal: refusing to merge unrelated histories
    ```shell script
    git merge master --allow-unrelated-histories
    # 同理 git pull/push same fatal
    git pull origin master --allow-unrelated-histories
    ```
  
    - Warning: LF will be replaced by CRLF
    ```shell script
    git config --global core.autocrlf false
    ```
  
    - npm install: Error: Can't find Python executable "python", you can set the PYTHON env variable
    ```shell script
    # For windows: run below script with Administrator authority
    npm install --global --production windows-build-tools
    ```
  
### 练习
- [Learn Git Branching](https://learngitbranching.js.org/)
 
### 参考
- https://git-scm.com/docs Git - Reference
- https://mp.weixin.qq.com/s/BC2UFcQiviqtq_ybfeq50A 【第1864期】手撕Git，告别盲目记忆
- https://nextfe.com/git-cheatsheet-advanced/ git 高级用法小抄

最后更新于2020年5月13日
