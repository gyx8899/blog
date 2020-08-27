# Console
[TOC]

## 不常用，但非常有用的 `API`

- clear: 清屏
```javascript
console.clear();
```

- time: 测试代码片段执行的时间。
```javascript
console.time('Loop event');
let count = 0;
for (let i = 0; i < 1000; i++) {
    count += i;
}
console.timeEnd('Loop event');
// Loop event: 0.043212890625ms
```