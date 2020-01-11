# React-生命周期方法快速转 Hooks（1）
Tag: React, Hooks, Life cycle

最近由于特殊需求，要把一个旧 React 项目转 Hooks，发现自己在 React 生命周期方法转 Hooks 时竟然还需要翻官方文档，真是惊掉下巴了。
![react-hooks](../assets/react-hooks.png)

> Function Component 不存在生命周期，所以不要把 Class Component 的生命周期概念搬过来试图对号入座。

*本文仅供部分生命周期方便快速转 Hooks, 并不代表所有生命周期方法都可以使用 Hooks 改写, 还需要根据具体使用场景分析。* 

## 生命周期图
先上 React 的生命周期图：
> 1. 旧生命周期图
> ![react life cycle old](../assets/react-life-cycle-old.png)
> 2. 新生命周期图
> ![react life cycle new](../assets/react-life-cycle-new.jpg)

## 生命周期方法转 Hooks
### 1. componentDidMount
难易程度：*
```jsx harmony
import React from 'react';

class Component extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return null;
  }
}
```
```jsx harmony
import React, {useEffect} from 'react';

function Component() {
  useEffect(() => {
    console.log('componentDidMount');
  }, []);
  return null;
}
```

### 2. componentDidUpdate
难易程度：***
```jsx harmony
import React from 'react';

class Component extends React.Component {
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}
```
```jsx harmony
import React, {useEffect, useState} from 'react';

function Component() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`componentDidMount or all state/props's componentDidUpdate`);
  });
  useEffect(() => {
    console.log(`componentDidMount or count's componentDidUpdate`);
  }, [count]);
  return null;
}
```

### 3. componentWillUnmount
难易程度：*
```jsx harmony
import React from 'react';

class Component extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
```
```jsx harmony
import React, {useEffect} from 'react';

function Component() {
  useEffect(() => {

    // return's callback will be called only when componentWillUnmount
    return () => {
      console.log(`componentWillUnmount`); 
    }
  });
  return null;
}
```

[![Edit hooks-lifecycle](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hook-lifecycle-pwbrk?fontsize=14&hidenavigation=1&theme=dark)

## 结束语
以上生命周期方法可以直接套用对应的 hooks 示例，其他生命周期方法会在（2）中继续整理。
（本文意在巩固自己对 Hooks 理解，同时也为有需要者提供直接而有效的快速转换示例）