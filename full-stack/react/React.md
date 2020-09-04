# React: 总结整理

<!-- toc -->

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