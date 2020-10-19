# HTTP: 小知识巧总结

## Response status codes

### 分组

* [1--] *(服务器 - 发) 信息响应 - Informational responses (100–199),*
* [2--] (客户端 - 收) 成功响应 - Successful responses (200–299),
* [3--] *(服务器 - 发) 重定向 - Redirects (300–399),*
* [4--] (客户端 - 收) 客户端错误 - Client errors (400–499),
* [5--] *(服务器 - 发) 服务器错误 - Server errors (500–599).*

### 常见状态码

|code|key|info|
|:---|:------|--------|
|200|OK|Get, Put 或 Post 请求响应成功|
|201|Created|标识一个新实例创建成功。请使用 Post 方法创建新实例并返回 201 状态码|
|304|Not Modified|发现资源已经缓存到本地，浏览器会自动减少请求次数|
|400|Bad Request|请求未被处理，因为服务器不能理解客户端想要什么|
|401|Unauthorized|因为请求缺少有效的凭据，应该使用有效的凭据重新发送请求|
|403|Forbidden|服务器理解本次请求，但拒绝授权|
|404|Not Found|未找到请求的资源|
|500|Internal Server Error|请求本身有效，但由于意外情况，服务器无法实现，服务器发生了故障|

### 所有状态码

#### 1xx: 信息响应

|code|key|info|
|:---|:------|--------|
|100|Continue||
|101|Switching Protocol||
|102|Processing||
|103|Early Hints |...|

#### 2xx: 成功响应

|code|key|info|
|:---|:------|--------|
|200|OK||
|201|Created||
|202|Accept||
|203|Non-Authoritative Information||
|204|No Content||
|205|Reset Content||
|206|Partial Content|...|

#### 3xx: 重定向

|code|key|info|
|:---|:------|--------|
|300|Multiple Choice||
|301|Moved Permanently||
|302|Found||
|303|See Other||
|304|Not Modified|...|

#### 4xx: 客户端错误

|code|key|info|
|:---|:------|--------|
|400|Bad Request||
|401|Unauthorized||
|402|Payment Required||
|403|Forbidden||
|404|Not Found||
|405|Method Not Allowed||
|406|Not Acceptable||
|407|Proxy Authentication Required||
|408|Request Timeout||
|409|Conflict||
|410|Gone||
|411|Length Required||
|...|...||
|431|Request Header Fields Too Large||
|...|...||
|451|Unavailable For Legal Reasons|...|

#### 5xx: 服务器错误

|code|key|info|
|:---|:------|--------|
|500|Internal Server Error||
|501|Not Implemented||
|502|Bad Gateway||
|503|Service Unavailable||
|504|Gateway Timeout||
|505|HTTP Version Not Supported||
|506|Variant Also Negotiates||
|507|Insufficient Storage||
|508|Loop Detected||
|510|Not Extended||
|511|Network Authentication Required|...|

## 参考
