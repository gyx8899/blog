# 借鉴-项目规范

[project-guidelines/README-zh.md at master · elsewhencode/project-guidelines](https://github.com/elsewhencode/project-guidelines/blob/master/README-zh.md)

通过学习前人的总结，根据实际情况可实践采纳的方面：
- 建议您在应用程序启动之前校验一下环境变量。  看这个例子 ，它使用了 joi 去校验提供的值。
- 在 package.json 里的 engines 中设置您的node版本。
- 如果需要使用那些不太熟悉的依赖包，请在使用之前与团队进行充分讨论。
- 始终确保您的应用程序在最新版本的依赖包上面能正常运行，而不是无法使用：npm outdated。
- 检查包是否有已知的安全漏洞，例如： Snyk。
- 使用 ./config 文件夹，不要为不同的环境制作不同的配置文件。参考
- 使用 .eslintignore 将某些文件或文件夹从代码风格检查中排除。
- 当您需要从风格检查中排除几个文件时，就再也不需要通过 eslint-disable 注释来污染您的代码了。
- 让您的编辑器提示您关于代码风格方面的错误。 请将 eslint-plugin-prettier 与 eslint-config-prettier 和您目前的ESLint配置一起搭配使用。 更多请阅读...
- 将Git的precommit钩子与Prettier结合使用。lint-staged, husky
- 虽然prettier自身已经非常强大，但是每次将其作为单独的一个npm任务去格式化代码，并不是那么地高效。 这正是lint-staged（还有husky）可以解决的地方。关于如何配置 lint-staged 请阅读这里 以及如何配置 husky 请阅读这里。