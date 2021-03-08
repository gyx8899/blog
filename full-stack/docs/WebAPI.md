# Web API

<!-- toc -->

## Common

- Location

```javascript
let redirectUrl = 'https://www.baidu.com';
window.location.href = redirectUrl;
window.location.assign(redirectUrl);
// 用给定的URL替换掉当前的资源。与 assign() 方法不同的是用 replace()替换的新页面不会被保存在会话的历史 History中，这意味着用户将不能用后退按钮转到该页面。
window.location.replace(redirectUrl);
```