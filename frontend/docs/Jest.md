# Jest learning manual
[TOC]

## Docs
[Jestjs](https://jestjs.io/zh-Hans/)

## Samples
[![Edit Jest-Samples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weathered-cdn-sjxck?fontsize=14&hidenavigation=1&theme=dark)

## 采坑系列

### 1. await expect(fetchData()).rejects not work
```javascript
function fetchData() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve("peanut butter");
    } else {
      reject(new Error("error"));
    }
  });
}
test("the fetch fails with an error", async () => {
// await expect(fetchData()).rejects.toMatch("error");
//expect(received).rejects.toMatch()
// Expected received Promise to reject, instead it resolved to value "peanut butter"

// await expect(fetchData()).rejects.toThrow("error");
// expect(received).rejects.toThrow()
// Expected received Promise to reject, instead it resolved to value "peanut butter"
});
```


最后更新于2020年2月18日

[^footnote]: timestamp-最后更新于2020年2月18日