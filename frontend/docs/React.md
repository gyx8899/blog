# React  
[TOC]

## 生命周期解读

- `constructor` 创建组件
    1. 初始化 state;
    
- `getDerivedStateFromProps` 从外部属性初始化内部状态，或 merge 到 初始化的 state 上

- `shouldComponentUpdate` 自定义是否需要 render，比如某些 state or props 的更新，UI 无需变化

- `render` 唯一必须实现的方法

- `getSnapshotBeforeUpdate` 
    1. 在页面 Render （componentDidUpdate） 之前调用，state 已更新；
    2. 典型场景：获取 render 之前的 dom 状态；
        
        示例：一个在顶部定时新增最新消息的可滚动列表，用户在滚动位置阅读消息，在新消息到来时，未做处理会导致列表抖动，在 `getSnapshotBeforeUpdate` 中记录

- `componentDidMount` 
    1. 发起 ajax 请求；
    2. 定义一些外部资源等副作用的事；

## Tips

- 组件复用：高阶组件和函数子组件设计模式

高阶组件：把通用逻辑封装（不包含 UI），一种是通过 `props` 透传给子组件，一种是无需传给子组件；
函数式子组件：即子组件（UI 或逻辑）是个自定义传入的函数，只接受父组件中被子组件需要的 `props`，从而达到子组件自定义，父组件重用；

- 拆分复杂度：component, router, reducer


最后更新于2020年4月25日
