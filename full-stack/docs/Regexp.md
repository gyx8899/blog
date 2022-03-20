# Regexp

## 基础

### 元字符

- 特殊单字符：

  - .(任意非换行字符) 
  - \d（任意数字） 
  - \D（任意非数字） 
  - \w（任意字母数字下划线） 
  - \W（任意非字母数字下划线） 
  - \s（任意空格）
  - \S （任意非空格）

- 空白符

> 不同的系统在每行文本结束位置默认的“换行”会有区别。比如在 Windows 里是 \r\n，在 Linux 和 MacOS 中是 \n

  - \r 回车符
  - \n 换行符
  - \f 换页符
  - \t 制表符
  - \v 垂直制表符
  - \s 任意空白符


- 范围

  - ｜ 或
  - [...] 多选一，括号中任意单个字符
  - [a-z] 匹配 a 到 z 任意字符，包含 a，z 
  - [^...] 取反 不能是括号内的任意字符

- 量词

  - * 任意次，0次或多次
  - + 1次或多次
  - ？0次或1次
  - {m} m 次
  - {m+} 至少 m 次
  - {m, n} m 到 n次

- 断言

## Special point

- 点（.）是匹配“任何字符”, 
  - `点 . 是一种特殊字符类，它与 “除换行符之外的任何字符” 匹配。`

    ```javascript
    let regexp = /CS.4/;
    
    alert( "CSS4".match(regexp) ); // CSS4
    alert( "CS-4".match(regexp) ); // CS-4
    alert( "CS 4".match(regexp) ); // CS 4 (space is also a character)
    ```

  - `带有“s”标志时点字符类严格匹配任何字符`，使用前注意查看[浏览器兼容性](https://caniuse.com/?search=dotall)

    ```javascript
    alert( "A\nB".match(/A.B/) ); // null (no match)
    alert( "A\nB".match(/A.B/s) ); // A\nB (match!)
    ```

- 匹配“任何字符”

  - `[.]/s`, 有兼容性问题；
  - `[\s\S]`
  - `[\d\D]`
  - `[^]`

- 量词

> 量词有两种工作模式：
>
> 贪婪模式
>
> 默认情况下，正则表达式引擎会尝试尽可能多地重复量词。例如，\d+ 检测所有可能的字符。当不可能检测更多（没有更多的字符或到达字符串末尾）时，然后它再匹配模式的剩余部分。如果没有匹配，则减少重复的次数（回溯），并再次尝试。
> 懒惰模式
>
> 通过在量词后添加问号 ? 来启用。在每次重复量词之前，引擎会尝试去匹配模式的剩余部分。
> 正如我们所见，懒惰模式并不是针对贪婪搜索的灵丹妙药。另一种方式是“微调”贪婪搜索，我们很快就会见到更多的例子。

## Online regex tester and debugger

- [regex101](https://regex101.com/) : PHP, PCRE, Python, Golang and JavaScript
- [oschina](https://tool.oschina.net/regex/)
- [chinaz](http://tool.chinaz.com/regex/)
- [w3cschool](https://www.w3cschool.cn/tools/index?name=re)
- [runoob](https://c.runoob.com/front-end/854)
- [haokh](http://tools.haokh.net/Regex)
- Windows 上推荐：RegexBuddy
- Mac上推荐：Expressions

### Collection of expression: 日常表达式

- Webpack tester the folder and file suffix

    Tested in [regexp101](https://regex101.com/r/yW4aZ3/118)

    ```javascript
    /^.+js\/folder(\/|.*?)[^\/]+?\.js$/g
    ```

    16进制色值校验

    ```js
    ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
    ```