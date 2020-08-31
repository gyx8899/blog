# useEffect

<!-- toc -->

## 常用示例

##### 在 `useEffect` 内部使用异步 Function，
- 不用改写 `fetchData` 为 `useCallback`；
- 当副作用无法在 `return` 中消除的时候，如下异步请求（回调）中调用声明周期的方法 `setState`，则需要判断 `isMounted` 的值后再进行执行;
- 是否销毁的状态 `isMounted`，写在 `useEffect` 内部，减少 `useState` 依赖;
```javascript
useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
        const article = await API.fetchArticle(id);
        if (!isMounted) {
          // check isMounted for async action which may have side effect
          setArticle(article);
        }
    };

    fetchData().then();

    return () => {
        isMounted = false;
    };
}, [id]);
```

##### 在 `useEffect` 中使用 `setInterval/setTimeout`, `clearInterval/clearTimeout`，无需将 id 转换为 `useState`;
```javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

##### 使用 `useReducer` 解救 `useEffect` 无法去除的依赖
以 setCount 为例：
```javascript
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + step);
  }, 1000);
  return () => clearInterval(id);
}, [step]);
```
将 setCount 转换成 reducer 事件 action ：
```javascript
const initialState = () => ({
  count: 0,
  step: 1,
});
const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};
const countReducer = ({count, step}, action) => {
  const {INCREMENT, DECREMENT} = ACTIONS;
  switch (action.type) 
  {
    case INCREMENT: 
      return {
        count: count + step,
      };
    case DECREMENT: 
      return {
        count: count - step,
      };
    default:
      return state;
  }
};

//...

const [state, dispatch] = useReducer(countReducer, initialState);
const { count, step } = state;

useEffect(() => {
  const id = setInterval(() => {
    dispatch({type: ACTIONS.INCREMENT}); // Instead of setCount(c => c + step);
  }, 1000);
  return () => clearInterval(id);
}, [dispatch]);

return (<div><span>{count}</span><span>{step}</span></div>);
```

##### 如何去除 ESLint 提示的组件内常量依赖
示例：
```javascript
function Video() {
    const {PLAYLIST_UPDATED} = EVENT_TYPES;
    useEffect(() => {
        const updatedCallback = () => {
          //...
        };
        event.on(PLAYLIST_UPDATED, updatedCallback);
        return () => {
            event.off(PLAYLIST_UPDATED, updatedCallback);
        };
    }, []);
  return (<div>...</div>)
}
// Line 166:5:  React Hook useEffect has a missing dependency: 'PLAYLIST_UPDATED'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```
方法：将对应常量移出组件内，放置在组件外部或单独的配置文件中。

```javascript
import event from 'Event';
const {PLAYLIST_UPDATED} = EVENT_TYPES;

function Video() {
    useEffect(() => {
        const updatedCallback = () => {
          //...
        };
        event.on(PLAYLIST_UPDATED, updatedCallback);
        return () => {
            event.off(PLAYLIST_UPDATED, updatedCallback);
        };
    }, []);
  return (<div>...</div>)
}
```