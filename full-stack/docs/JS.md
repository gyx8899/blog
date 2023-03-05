# JS 精选

## 收藏优质总结

- [JavaScript Tips - Marko Denic - Web Developer](https://markodenic.com/javascript-tips/)

## 特殊逻辑

### 默认命名导出的区别

> - 导出与导入均为引用时，最终才是引用。
> - 导入时，除 {} = await import() 外均为引用。
> - 导出时，除 export default thing 与 export default 123 外均为引用。

- [默认命名导出的区别](https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/204.%E7%B2%BE%E8%AF%BB%E3%80%8A%E9%BB%98%E8%AE%A4%E3%80%81%E5%91%BD%E5%90%8D%E5%AF%BC%E5%87%BA%E7%9A%84%E5%8C%BA%E5%88%AB%E3%80%8B.md)
- [export-default-thing-vs-thing-as-default](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/)

### ~ 符号

- +1  转换数字为字符串 （某些情况下，+会被解析为字符串链接符，使用时需注意）
- ~(1+2) 一个波浪号表示查看表达式的二进制值，并按位执行非操作，例如：~5 = -6
- 位操作必须是整数，结果也是整数，所有可以使用~~去掉小数