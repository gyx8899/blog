# React: 生命周期方法快速转 Hooks（2）
Tag: React, Hooks, Life cycle

[TOC]

这节主要内容是其他生命周期方法还能那么顺利的转 Hooks 么？我们来一起看一看：

## componentDidUpdate: 获取 DOM 的信息，如高度等，在 Hooks 中使用 useLayoutEffect

关于 `useLayoutEffect` 的官方指导:
> 1. 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
> 2. 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
> 3. useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的

场景：获取 Dom 高度
解说：useEffect 的执行会在 DOM 渲染之前，所以如果想要拿到最新 state 的 DOM，这个时候就可以在 useLayoutEffect 中获取。（配合 useRef）
