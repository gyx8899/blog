# Regexp

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
[regex101](https://regex101.com/) : PHP, PCRE, Python, Golang and JavaScript

### Collection of expression: 日常表达式

- Webpack tester the folder and file suffix

    Tested in [regexp101](https://regex101.com/r/yW4aZ3/118)
    ```javascript
    /^.+js\/folder(\/|.*?)[^\/]+?\.js$/g
    ```