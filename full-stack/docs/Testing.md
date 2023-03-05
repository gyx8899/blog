# Testing

## 分类

- 单元测试
- 集成测试
- 项目测试（端到端）

## 哪些代码需要测试

- 公共 API, 公共 function, (黑盒测试)
- 公共组件（会被调用多次）；
- 复杂的逻辑；

## 测试框架

- Jest - facebook
  - 运行库
  - 断言库
  - mock
- Qunit

## 测试覆盖率 --coverage

- 原则上 100%
- 特殊情况，如有浏览器兼容性的 API 等
- 被测试部分的重要性， 至少 80%
- 设置的 Threshold，只增不减

## 重构

让代码更简单、易读、易维护、易扩展

## Jest

Jest 是用来创建、执行和构建测试用例的一个 JavaScript 测试库。

- 运行库
- 断言库
- mock

### 安装 + Sample

- [facebook/jest: Delightful JavaScript Testing.](https://github.com/facebook/jest)

### 简单用法介绍

- [测试框架 Jest 实例教程 - 掘金](https://juejin.im/post/5ba8b6256fb9a05cd7774432)
- [前端测试框架 Jest - 掘金](https://juejin.im/post/597aa518f265da3e345f3262)

### 重点文档

- [Globals · Jest](https://jestjs.io/docs/zh-Hans/api)
- [Expect · Jest](https://jestjs.io/docs/zh-Hans/expect)
- [Mock Functions · Jest](https://jestjs.io/docs/zh-Hans/mock-function-ap)

### 示例

- [Jest-Samples - CodeSandbox](https://codesandbox.io/s/jest-samples-sjxck)

```shell script
git clone https://gitlab.neulion.com.cn:645/framework/component.git
cd component
git branch -a
git checkout testing
npm install
```

## React + Jest

### 官方文档

- [Test Utilities – React](https://react.docschina.org/docs/test-utils.html)
- [Test Renderer – React](https://react.docschina.org/docs/test-renderer.html)
- [React Testing Library · Testing Library (React 推荐)](https://testing-library.com/docs/react-testing-library/intro)
- [测试概览 – React](https://react.docschina.org/docs/testing.html)
- [测试技巧 – React](https://react.docschina.org/docs/testing-recipes.html)
- [测试环境 – React](https://react.docschina.org/docs/testing-environments.html)

### 测试运行器

使用 Jest，mocha，ava 等测试运行器能像编写 JavaScript 一样编写测试套件，并将其作为开发过程的环节运行。此外，测试套件也将作为持续集成的环节运行。

- Jest 与 React 项目广泛兼容，支持诸如模拟模块、计时器 和 jsdom 等特性。如果你使用 Create React App，Jest 已经能够开箱即用且包含许多实用的默认配置。
- 像 mocha 这样的库在真实浏览器环境下运行良好，并且可以为明确需要它的测试提供帮助。
- 端对端测试用于测试跨多个页面的长流程，并且需要不同的设置。

### 模拟功能

在编写测试的时候，我们希望模拟代码在测试环境较真实环境中缺失的等效部分（例如，在 Node.js 中检查 navigator.onLine 的状态）。测试还可以监视某些功能，并观察测试的其他部分如何与它们进行交互。有选择的将这些功能模拟为测试友好的版本是很有用的。

这对于数据获取尤其有用。通常最好使用“假”数据进行测试，以避免从实际 API 端获取数据可能导致的缓慢和不稳定（例子）。这样做有助于让测试变得可预测。像 Jest 与 sinon 这样的类库，支持模拟功能。对于端对端测试，虽然模拟网络可能更加困难，但你可能还想对真实的 API 端进行测试。

### 端对端测试

端对端测试对于测试更长的工作流程非常有用，特别是当它们对于你的业务（例如付款或注册）特别重要时。对于这些测试，你可能会希望测试真实浏览器如何渲染整个应用、从真实的 API 端获取数据、使用 session 和 cookies 以及在不同的链接间导航等功能。你可能还希望不仅在 DOM 状态上进行断言，而同时也在后端数据上进行校验（例如，验证更新是否已经在数据库中持久化）。
在这种场景下，你可以使用像 Cypress 这类框架或者如 puppeteer 这样的库，这样你就可以在多个路由之间导航切换，并且不仅能够在浏览器中对副作用进行断言也能够在后端这么做。

### 比较 3 类测试工具

ReactTestUtils, react-testing-library and Enzyme

#### 官方定义及说明

- ReactTestUtils 可搭配你所选的测试框架，轻松实现 React 组件测试。
- The react-testing-library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom.
- Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

注意：

我们推荐使用 React Testing Library，它使得针对组件编写测试用例就像终端用户在使用它一样方便。
另外，Airbnb 发布了一款叫作 Enzyme 的测试工具，通过它能够轻松对 React 组件的输出进行断言、操控和遍历。

#### Enzyme

> Enzyme是一个由 Airbnb 维护的测试工具，可以用来断言、操作、遍历 React 组件。你可以用它来管理单元测试，在 React 测试中与快照测试互补。
>
> Enzyme API 中总共有三种渲染机制。 shallow() - 浅渲染组件不会渲染它的子组件，还有 mount() 和render() 方法。这两种方式都会初始化父组件和所有的子组件。此外 mount() 还给予你调用组件生命周期的方法。但是什时候该使用哪种渲染机制呢？这里有一些建议：
>
> - 不论怎样都优先尝试使用浅渲染（shallow()）
> - 如果需要测试 componentDidMount() 或 componentDidUpdate()，使用 mount()
> - 如果你想测试组件的生命周期和子组件的行为，使用 mount()
> - 如果你想测试一个组件的子组件的渲染，并且不关心生命周期方法和减少些渲染的花销的话，使用 render()

### 对比

> react-testing-library is intended for blackbox integration/e2e tests. It uses React renderer and ReactTestUtils internally, requires real DOM because it's component's output that is asserted in tests, not internals. It doesn't provide facilities for isolated unit tests but it's possible to do this by mocking modules that contain component that need to be spied, mocked or stubbed by other means, notably jest.mock.
>
> react-testing-library doesn't give you any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with your application in the same way a user would. So rather than set the state of a component you reproduce the actions a user would do to reach that state.
>
> Enzyme is intended for unit/integration testing. Its API was designed to test the implementation. It offers custom renderer that doesn't require DOM (for shallow rendering), behaves differently from React renderer and allows things that are important for unit testing but aren't possible or straightforward with default renderer, like synchronous state updates, shallow rendering, disabling lifecycle methods, etc.
>
> Enzyme allows you to access the internal workings of your components. You can read and set the state, and you can mock children to make tests run faster.
>
> react-dom/test-utils and react-test-renderer contain a subset of functionality, Enzyme and react-testing-library were built upon them. API is scarce and requires to write boilerplate code or custom utility functions for full-grown testing. React officially promotes Enzyme and react-testing-library as better alternatives.

## 意义 && 作用

- （开发者 & 团队）提升信心
- （开发者）开发阶段实时反馈
- （开发者）时间价值；
- 开发前期时间增加30% - 50%；
- 为后期新需求及 fix bug 提供帮助；
- 节省已有功能回归测试的时间；
- 及时的测出牵连的影响，及早修复；
- （开发者）指导（逼迫）写出更好的代码，好的代码同时也容易测试；
- （开发者）测试即文档，测试即需求，测试即功能
- （团队）测试资产

## 参考资料

- [facebook/jest: Delightful JavaScript Testing](https://github.com/facebook/jest)
- [测试框架 Jest 实例教程 - 掘金](https://juejin.im/post/5ba8b6256fb9a05cd7774432)
- [Globals · Jest](https://jestjs.io/docs/zh-Hans/api)
- [Expect · Jest](https://jestjs.io/docs/zh-Hans/expect)
- [Mock Functions · Jest](https://jestjs.io/docs/zh-Hans/mock-function-ap)
- [Test Utilities – React](https://react.docschina.org/docs/test-utils.html)
- [Test Renderer – React](https://react.docschina.org/docs/test-renderer.html)
- [React Testing Library · Testing Library (React 推荐)](https://testing-library.com/docs/react-testing-library/intro)
- [测试概览 – React](https://react.docschina.org/docs/testing.html)
- [测试技巧 – React](https://react.docschina.org/docs/testing-recipes.html)
- [测试环境 – React](https://react.docschina.org/docs/testing-environments.html)
- [reactjs - Difference between enzyme, ReactTestUtils and react-testing-library - Stack Overflow](https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library)
- [How to Test Asynchronous Methods with React Testing Library](https://www.polvara.me/posts/how-to-test-asynchronous-methods/)
- [Writing Tests | Redux](https://redux.js.org/recipes/writing-tests/)