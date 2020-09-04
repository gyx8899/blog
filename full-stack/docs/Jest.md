# Jest learning manual

<!-- toc -->

## Docs
[Jestjs](https://jestjs.io/zh-Hans/)

## Samples
[![Edit Jest-Samples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weathered-cdn-sjxck?fontsize=14&hidenavigation=1&theme=dark)

## 采坑系列

- await expect(fetchData()).rejects not work
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

- Cannot spy the fetch property because it is not a function;
```javascript
beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

afterEach(() => {
    // 退出时进行清理
    global.fetch.mockClear();
    delete global.fetch;
});
```

- No tests found, exiting with code 1
> The test file need to be xxx.test.js, not xxx.js when the Jest config contains testRegex ".test.js"

- Jest encountered an unexpected token
  
  This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
  
  By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
  
    > https://www.cnblogs.com/xueyoucd/p/10495922.html 解决jest处理es模块 - 学友2000 - 博客园

    - 安装依赖包，特别是 `babel-plugin-transform-es2015-modules-commonjs`
    ```shell
    yarn add --dev babel-jest @babel/core @babel/preset-env babel-plugin-transform-es2015-modules-commonjs
    ```
    - 配置 `babel.config.js`
    ```javascript
    module.exports = {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        node: "current"
                    }
                }
            ]
        ],
        plugins: ["transform-es2015-modules-commonjs"]
    };
    ```
    - 配置 `jest.config.js` 或在 `package.json` 中添加 `jest` 配置
    ```javascript
    module.exports = {
        // 查看报错的 import 方法来源的包，比如是 lodash-es, 如果还有其他的，添加到 other-es-lib 的位置
        // 重点：将不忽略 lodash-es, other-es-lib 这些es库, 从而使 babel-jest 去处理它们
        transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"]
    };
    ```
