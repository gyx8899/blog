# useEffect

[TOC]

## 常用示例

##### useEffect 只在自己内部使用的 function，不用改写 fetchData 为 useCallback；

```javascript
useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
        // ...
    };

    fetchData().then();

    return () => {
        didCancel = true;
    };
}, [url, options]);
```

##### useEffect setInterval/setTimeout, clearInterval/clearTimeout 的使用，无需将 id 转为 useState;
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

##### 使用 useReducer 解救无法去除的依赖
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
    dispatch({ type: "tick" }); // Instead of setCount(c => c + step);
  }, 1000);
  return () => clearInterval(id);
}, [dispatch]);

```

##### 是否销毁的状态 didCancel/didUnMount 可写在 useEffect 内部，减少 useState 依赖。

```javascript
useEffect(() => {
    // didCancel 赋值与变化的位置更内聚
    let didCancel = false;

    async function fetchData() {
      const article = await API.fetchArticle(id);
      if (!didCancel) {
        setArticle(article);
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [fetchArticle]);
```