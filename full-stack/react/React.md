# React: 总结整理

## 主要特点

- 虚拟 DOM
- 支持服务器端渲染
- 遵循单向数据流
- 使用可重用、可组合的 UI 组件

## 生命周期解读

- `constructor` 创建组件
    1. 初始化 state;
    2. 定义常量数据;

- `getDerivedStateFromProps` 从外部属性初始化内部状态，或 merge 到 初始化的 state 上

- `shouldComponentUpdate` 自定义是否需要 render，比如某些 state or props 的更新，UI 无需变化

- `render` 唯一必须实现的方法

- `getSnapshotBeforeUpdate`
    1. 在页面 Render （componentDidUpdate） 之前调用，state 已更新；
    2. 典型场景：获取 render 之前的 dom 状态；

    > 示例：一个在顶部定时新增最新消息的可滚动列表，用户在滚动位置阅读消息，在新消息到来时，未做处理会导致列表抖动，在 `getSnapshotBeforeUpdate` 中记录

- `componentDidMount`
    1. 发起 ajax 请求；
    2. 定义一些外部资源等副作用的事；

## Tips

- 组件复用：高阶组件和函数子组件设计模式

高阶组件：把通用逻辑封装（不包含 UI），一种是通过 `props` 透传给子组件，一种是无需传给子组件；
函数式子组件：即子组件（UI 或逻辑）是个自定义传入的函数，只接受父组件中被子组件需要的 `props`，从而达到子组件自定义，父组件重用；

- 拆分复杂度：component, router, reducer

- Render Props
    1. 父组件的 props 中返回一个组件的函数
    2. 组件解耦 + 功能复用
    3. 缺陷：callback 嵌套地狱；React.PureComponent性能问题 （声明 this 函数解决）

- Render Props VS HOC

> 避免 JSX 嵌套地狱；避免 Props 命名冲突；不同组合时机 （HOC 静态组合，Render Porps 动态组合）

## 收集

- [React 高阶组件](https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/12.%E7%B2%BE%E8%AF%BB%E3%80%8AReact%20%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%E3%80%8B.md)

> 高阶组件常见有两种实现方式，一种是 Props Proxy，它能够对 WrappedComponent 的 props 进行操作，提取 WrappedComponent state 以及使用其他元素来包裹 WrappedComponent。Props Proxy 作为一层代理，具有隔离的作用，因此传入 WrappedComponent 的 ref 将无法访问到其本身，需要在 Props Proxy 内完成中转
>
> 另一种是 Inheritance Inversion，HOC 类继承了 WrappedComponent，意味着可以访问到 WrappedComponent 的 state、props、生命周期和 render 等方法。如果在 HOC 中定义了与 WrappedComponent 同名方法，将会发生覆盖，就必须手动通过 super 进行调用了。通过完全操作 WrappedComponent 的 render 方法返回的元素树，可以真正实现渲染劫持。这种方案依然是继承的思想，对于 WrappedComponent 也有较强的侵入性