# Jest learning mannual
[TOC]

## Environment


## API 

### 1. match functions with examples
```javascript
const value = 2 + 2;
expect(value).toBe(4);
expect(value).toBeCloseTo(4.1);
expect(value).not.toBe(3);
expect(value).toEqual(4);

expect(value).toMatch(/I/); // 正则表达式
expect(value).toMatch(/stop/); // 正则表达式

expect(value).toBeNull();
expect(value).toBeDefined();
expect(value).toBeUndefined();
expect(value).toBeTruthy();
expect(value).toBeFalsy();

expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);
```


最后更新于2020年2月9日

[^footnote]: timestamp-最后更新于2020年2月9日