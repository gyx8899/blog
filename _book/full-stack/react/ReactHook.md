# React Hook - 速览

[TOC]

## 介绍
> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
> 1. 向下兼容;
> 2. 在无需修改组件结构的情况下复用状态逻辑;
> 3. class 不能很好的压缩，并且会使热重载出现不稳定的情况 —— Hook 使你在非 class 的情况下可以使用更多的 React 特性
> 4. 解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。

## 使用规则
> 1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
> 2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
> * （还有一个地方可以调用 Hook —— 就是自定义的 Hook 中)

## 被开发的三个理由
> 难以复用类组件之间的逻辑
> 生命周期中经常包含一些莫名其妙的不相关逻辑
> 类组件难以被机器和人理解

## Hook 方法

### 分类
#### 主要 hook
- [useState](#useState)-允许我们编写带有状态的纯函数
- [useEffect](#useEffect)-让我们执行副作用。副作用可能是API调用，更新DOM，订阅事件侦听器
- [useContext](#useContext)-允许我们编写带有上下文的纯函数
- [useRef](#useRef) —允许我们编写返回可变ref对象的纯函数

#### 在特定的极端情况下的其他Hook

- [useReducer](#useReducer) —的替代品useState。接受type的化简器，并返回与方法配对的当前状态。通常，当您具有包含多个子值的复杂状态逻辑或下一状态取决于上一个状态时，通常更可取(state, action) => newStatedispatchuseState
- [useMemo](#useMemo) — useMemo用于返回已记忆的值
- [useCallback](#useCallback) — useCallback挂钩用于返回记录的回调
- [useImperativeMethods](#useImperativeMethods) — useImperativeMethods自定义使用时暴露给父组件的实例值 ref
- [useMutationEffects](#useMutationEffects) —在允许您执行DOM突变的意义上，useMutationEffect与useEffect Hook相似
- [useLayoutEffect](#useLayoutEffect) — useLayoutEffect挂钩用于从DOM读取布局并同步重新渲染

### <span id="useState">useState</span>
> useState 就是一个 Hook 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数
```javascript
// 替代 setState
const [count, setCount] = useState(0);
const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
const [position, setPosition] = useState({ left: 0, top: 0 });
```

### <span id="useEffect">useEffect</span>
> useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
> 1. 可以访问到组件的 props 和 state;
> 2. 默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候;
> 3. 副作用函数还可以通过返回一个函数来指定如何“清除”副作用;
> 4. 使用多个 Effect 实现关注点分离
> 5. 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
>    确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量。
> 6. 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
> 7. 虽然 useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮渲染的 effect。

```javascript
// Demo
useEffect(() => {
  // 在 componentDidMount、(所有)componentDidUpdate执行
  document.title = `You clicked ${count} times`; 
  
  // 在 componentWillUnmount 执行
  return () => {
    console.log('在 componentWillUnmount 执行');
  }
});

useEffect(() => {
  // 在 componentDidMount 执行
  document.title = `You clicked ${count} times`;

  // 在 componentWillUnmount 执行
  return () => {
    console.log('在 componentWillUnmount 执行');
  }
}, []);

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

// 常规用法
let timeout = null;
useEffect(() => {
  document.title = `You clicked ${count} times`;
  
  timeout = setTimeout(() => {
    console.log('timeout');
  }, 5000);
  return () => {
    // 清除副作用: 数据获取、订阅、手动修改过 DOM、setTimeout, setInterval
    clearTimeout(timeout);
  }
}, [count]); // 仅在 count 更改时更新
```

### <span id="useLayoutEffect">useLayoutEffect</span>
> 1. 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
> 2. 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
> 3. useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的

> 并非所有 effect 都可以被延迟执行。例如，在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，
> 这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）
> React 为此提供了一个额外的 useLayoutEffect Hook 来处理这类 effect。
> 它和 useEffect 的结构相同，区别只是调用时机不同。

### <span id="useContext">useContext</span>
```javascript
const value = useContext(MyContext);

// Demo
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  const style = { background: theme.background, color: theme.foreground };

  return (
    <button style={style}>
      I am styled by theme context!
    </button>
  );
}
```
> 1. 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
> 2. 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。
> 3. 别忘记 useContext 的参数必须是 context 对象本身：

> context API现在是React的一部分，useContext仅仅是让你不用包裹也可以使用context。并且有一些开发这用context来管理整个应用的状态，这不是设计context的目的。通过文档可以看出：
> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
> Context是为了共享数据而被设计出来的，可以认为是React组件树的“全局”，比如当前已授权的用户、主题或者首选的语言。换句话说，就是那些预计不会频繁更新的东西。
> 文档中也建议有节制地使用context，因为“它会使得组件难以复用”。他们也提醒开发者，如果开发者不小心，context很容易触发不必要的重复渲染。

### <span id="useReducer">useReducer</span>
> 可以让你通过 reducer 来管理组件本地的复杂 state.
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'aa':
      // return {...state};
    default: 
      throw new Error();
  }
}
const initialArg = {count: 0};

const [state, dispatch] = useReducer(reducer, initialArg, init);

// initialArg, init 的内部使用
let initialState = void 0;
  if (init !== undefined) {
    initialState = init(initialArg);
  } else {
    initialState = initialArg;
  }
```

```javascript
// Demo
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

### <span id="useCallback">useCallback</span>
```javascript
function doSomething(param1, param2) {}
const memoizedCallback = useCallback(
   () => {
     doSomething(a, b);
   },
   [a, b],
 );
```
> 1. 返回一个 memoized 回调函数。
> 2. 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
> 该回调函数仅在某个依赖项改变时才会更新。
> 当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
> useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

### <span id="useMemo">useMemo</span>
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
> 1. 返回一个 memoized 值。
> 2. 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
> 3. 传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
> 4. 你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。

### <span id="useRef">useRef</span>
```javascript
const refContainer = useRef(initialValue);
```
> 1. useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
> 2. 返回的 ref 对象在组件的整个生命周期内保持不变。

### <span id="useImperativeHandle">useImperativeHandle</span>
```javascript
useImperativeHandle(ref, createHandle, [deps])
```
> useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
> 在大多数情况下，应当避免使用 ref 这样的命令式代码。
> useImperativeHandle 应当与 forwardRef 一起使用
```javascript
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} {...props} />;
}
FancyInput = forwardRef(FancyInput);
// 在本例中，渲染 <FancyInput ref={inputRef} /> 的父组件可以调用 inputRef.current.focus()。
```

### <span id="useDebugValue">useDebugValue</span>
> useDebugValue(value)
> useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。

## 自定义 Hook
> 通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。
> 1. 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。

### Demos
```javascript
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

```javascript
/**
 * 如何获取上一轮的 props 或 state？
 * 目前，你可以 通过 ref 来手动实现：
 */
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Now: {count}, before: {prevCount}</h1>;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```
```javascript
/**
 * 我该如何测量 DOM 节点？
 要想测量一个 DOM 节点的位置或是尺寸，你可以使用 callback ref。每当 ref 被附加到一个另一个节点，React 就会调用 callback。这里有一个 小 demo:
 */
function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}
```
```javascript
function MeasureExample() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  );
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}
```
```javascript
/**
 * 在依赖列表中省略函数是否安全？
 * 一般来说，不安全。
 */
function Example({ someProp }) {