# Github Action

## schedule 事件

### corn 规则

- \* is a special character in YAML so you have to quote this string
- minute (0 - 59) hour (0 - 23) day of the month (1 - 31) month (1 - 12 or JAN-DEC) day of the week (0 - 6 or SUN-SAT)
- \*	任意值	* * * * * 在每天的每分钟运行。
- ,	值列表分隔符	2,10 4,5 * * * 在每天第 4 和第 5 小时的第 2 和第 10 分钟运行。
- \-	值的范围	0 4-6 * * * 在第 4、5、6 小时的第 0 分钟运行。
- /	步骤值	20/15 * * * * 从第 20 分钟到第 59 分钟每隔 15 分钟运行（第 20、35 和 50 分钟）。

```shell
- cron:  '1 1 1 1 *'
```