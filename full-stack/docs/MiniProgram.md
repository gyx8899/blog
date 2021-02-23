# 小程序
采用了 Hybird - 混合的架构模式

## 小程序的双线程

- 渲染线程：使用 Webview 渲染 UI。
- 逻辑线程：使用类似 Web Worker 的独立线程运行逻辑。通过 setData 更新数据的方式异步更新 UI。
