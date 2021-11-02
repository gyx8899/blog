# 代码风格指南

## 注释

### 标记类型

- @param {string} 参数， @param {Array.<number>}
- @author name 作者
- @fileoverview 文件描述信息
- @return {string}
- @type {number} 属性
- @enum {number} 枚举
- @interface
- @constructor
- @extends {Type}
- @implements
- @lends {objectName}
- @private
- @protected
- @this 上下文中的 this
- @supported
- @deprecated
- @override
- @inheritDoc
- @code 代码，使其能在生成的文档中格式化
- @license or @preserve
- @noalias 不要为变量或函数重命名
- @define 表示变量可在编译时被编译器重新赋值

### 模板

```js
@param {Type} 变量名 描述
@return {Type} 描述
@author username@xxx.com (firstName lastName)
Throws {@code goog.iter.StopIteration} when it
```
