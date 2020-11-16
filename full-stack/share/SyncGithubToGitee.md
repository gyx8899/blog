# 3步自动同步你的 Github 仓库到 Gitee 仓库

相信有很多以 Github 为主阵地的开发者，都同样拥有一个镜像备份的心。

比如我就偶尔使用 Gitee 同步 Github，对 Gitee 已有强大的“从 Github/Gitlab 导入仓库”和“项目名旁边的刷新按钮点击同步”功能非常满意，但是认识到 Github Actions 的强大和便捷后，仍忍不住要搞一些小轮子（小动作）。

最终发现：站在巨人的肩膀上真香，感谢 [Yikun/hub-mirror-action](https://github.com/Yikun/hub-mirror-action) 项目让这个备份的目标又进一步。

## 先定个小目标，然后再分解目标
> Github 仓库每一次提交后，通过 Github Actions 自动将仓库同步到 Gitee 上。

### 了解 Github Actions
（已了解的直接跳过）
- https://github.com/features/actions Features • GitHub Actions
- https://docs.github.com/cn/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions GitHub 操作的工作流程语法 - GitHub Docs
- http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html GitHub Actions 入门教程 - 阮一峰的网络日志
- https://gabrieltanner.org/blog/an-introduction-to-github-actions An Introduction to Github Actions

### 先上菜，再细品
只有不到 40 行的代码，还是直接上吧。

- 点击查看仓库上的代码文件 [sync2gitee.yml](https://github.com/gyx8899/actionsflow/blob/main/workflows/sync2gitee.yml)

```yaml
# 通过 Github actions， 在 Github 仓库的每一次 commit 后自动同步到 Gitee 上
name: sync2gitee
on:
  push:
    branches:
      - master
jobs:
  repo-sync:
    env:
      dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
      dst_token: ${{ secrets.GITEE_TOKEN }}
      gitee_user: ${{ secrets.GITEE_USER }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: sync github -> gitee
        uses: Yikun/hub-mirror-action@master
        if: env.dst_key && env.dst_token && env.gitee_user
        with:
          # 必选，需要同步的 Github 用户（源）
          src: 'github/${{ github.repository_owner }}'
          # 必选，需要同步到的 Gitee 用户（目的）
          dst: 'gitee/${{ secrets.GITEE_USER }}'
          # 必选，Gitee公钥对应的私钥，https://gitee.com/profile/sshkeys
          dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
          # 必选，Gitee对应的用于创建仓库的token，https://gitee.com/profile/personal_access_tokens
          dst_token:  ${{ secrets.GITEE_TOKEN }}
          # 如果是组织，指定组织即可，默认为用户 user
          # account_type: org
          # 直接取当前项目的仓库名
          static_list: ${{ github.event.repository.name }}
          # 还有黑、白名单，静态名单机制，可以用于更新某些指定库
          # static_list: 'repo_name,repo_name2'
          # black_list: 'repo_name,repo_name2'
          # white_list: 'repo_name,repo_name2'
```

### 自动同步仅需3步：

1. 在 [Gitee](https://gitee.com/) 账户中，通过 `+`下拉列表中的 “从 Github/Gitlab 导入仓库”，导入要同步的 Github 仓库；
1. 在 Github 需要同步的仓库上添加 3 个 secrets: (Setting -> Secrets -> New repository secret)

    - `GITEE_USER`，比如个人的 Gitee user id: [steper](https://gitee.com/steper)
    - `GITEE_PRIVATE_KEY`，获取方法(如果已有，直接设置) - [Gitee公钥对应的私钥](https://gitee.com/profile/sshkeys)
        
        新建 private key 方法：
        - [生成 SSH 公钥](https://gitee.com/help/articles/4181#article-header0)
        - [将 SSH 公钥添加到 Gitee 公钥](https://gitee.com/profile/sshkeys)
        - 同时将公钥添加到 Github 项目的 secrets 中;
    - `GITEE_TOKEN`，获取方法 - [Gitee对应的用于创建仓库的token](https://gitee.com/profile/personal_access_tokens)
        
        新建 token 方法：
        - 点击上面的链接并登录 Gitee, 点击“生成新令牌”，
        - 添加描述，比如用处 - Github 仓库同步到 Gitee；
        - 权限默认全选，点击提交，显示出生成的 token 值；（注意保存，需要填到 Github 的 secrets 中）
1. 复制 [sync2gitee.yml](https://github.com/gyx8899/actionsflow/blob/main/workflows/sync2gitee.yml)，到 Github 仓库下的 `.github` 文件夹的 `workflows` 文件夹下，即 `[project-folder]/.github/workflows/sync2gitee.yml`，并提交到 Github 仓库。（这次操作就会触发同步的 Action）

后续在 Github 仓库上提交改动（如修改 README.md），都可以到 [Gitee](https://gitee.com/) 上对应仓库验证是否同步成功。

### GitHub Actions 对于私有项目，每个月有 2000 分钟的免费额度。
普通的一次 GitHub Action 执行需要 2-3 分钟，`2000 / 3 = 666`次提交，足足满足一天 22 次的改动提交，几乎没有任何顾虑。

- [关于 GitHub 操作的计费](https://docs.github.com/cn/free-pro-team@latest/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)
- [查看个人已用量](https://github.com/settings/billing)

### 真实例，见效果

- 从 Github 仓库 Action [gyx8899/blog](https://github.com/gyx8899/blog)
