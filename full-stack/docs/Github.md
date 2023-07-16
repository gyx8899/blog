# Github

## 在命令行上使用 personal access token

> 如果你有 personal access token，则可以在通过 HTTPS 执行 Git 操作时输入它，而不是密码。

  例如，若要在命令行上克隆存储库，请输入以下 git clone 命令。 然后，系统会提示你输入用户名和密码。 当系统提示输入密码时，请输入 personal access token 而不是密码。

  Personal access token 只能用于 HTTPS Git 操作。 如果存储库使用 SSH 远程 URL，则需要将远程 URL 从 SSH 切换到 HTTPS。

  如果没有提示您输入用户名和密码，说明您的凭据可能已缓存在计算机上。 可在密钥链中更新凭据，从而用令牌替换旧密码。

  可以使用 Git 客户端缓存 personal access token 而不是为每个 HTTPS Git 操作手动输入 personal access token。 Git 会将您的凭据临时存储在内存中，直到过期为止。 您还可以将令牌存储在 Git 可以在每个请求之前读取的纯文本文件中。 有关详细信息，请参阅“在 Git 中缓存 GitHub 凭据”。

```
$ git clone https://github.com/USERNAME/REPO.git
Username: YOUR_USERNAME
Password: YOUR_PERSONAL_ACCESS_TOKEN

# Developer's hack (shortcode):
$ git remote set-url origin https://<githubtoken>@github.com/<username>/<repositoryname>.git
# demo
$ git remote set-url origin https://<githubtoken>@github.com/gyx8899/blog.git

```

## 使用技巧

- Github 网页内搜索：快捷键为 s   （[高级搜索](https://github.com/search/advanced)使用限定符）

- 查找文件：t 键，搜索仓库下的文件

- 跳转行： l 健，输入行号，选择行号可以快速复制行代码

- 改动记录：b 健

- 命令面版：command + k

- 网页阅读代码：.健 或 https://github.com/gyx8899/blog 链接中的 .com 改为 .dev

- 在线运行项目：在当前项目地址前加上 `gitpod.io/#/`, 比如 https://github.com/gyx8899/exam-app => https://gitpod.io/#/github.com/gyx8899/exam-app

## 注意事项

- 克隆代码首选 [SSH](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh)，因为 HTTPS 密码认证机制更新了

## 资源

- [快捷键](https://docs.github.com/cn/get-started/using-github/keyboard-shortcuts)