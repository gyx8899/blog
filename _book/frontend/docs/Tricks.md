## JS-Tips

### JS functions
* arguments.callee
> The 5th edition of ECMAScript (ES5) forbids use of arguments.callee() in strict mode. Avoid using arguments.callee() by either giving function expressions a name or use a function declaration where a function must call itself.

[arguments.callee - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)

* el.matches/matchesSelector not fully support in IE 11
> 对于不支持 Element.matches() 或Element.matchesSelector()，但支持document.querySelectorAll()方法的浏览器，存在以下替代方案

```javascript
if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
}
```
[Element.matches()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches)

#### Demo case:
```javascript
// PopupDismiss JS Plugin
function findAncestor (el, sel) {
	while ((el = el.parentElement) && !matches(el, sel)) {}
	return el;
}

function matches (el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}
```

### JS 
```javascript
// NodeList to array
[].slice.call(document.querySelectorAll('div'));
Array.prototype.slice.call(document.querySelectorAll('div'));
```
#### Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf.

> Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)).

```javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));
```

#### Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
```javascript
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```
#### To convert an iterable object to an array, use spreads ... instead of Array.from.
```javascript
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```
#### Use Array.from for converting an array-like object to an array.
```javascript
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

#### Use named function expressions instead of function declarations. eslint: func-style
```javascript
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

#### Wrap immediately invoked function expressions in parentheses. eslint: wrap-iife
```javascript
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```



#### Closure
```javascript
foo.addEventListener('click', (function() {
    var times = 0
    return function() {
        times++
        console.log(times)
    }
})(), false)

var counter = function() {
    var count = 0
    return function() {
        return count++
    }
}

var counter1 = counter();
counter1();//0
counter1();//1
```

#### apple-mobile-web-app-status-bar-style
 Sets the style of the status bar for a web application.

> Syntax
<meta name="apple-mobile-web-app-status-bar-style" content="black">

> Discussion
This meta tag has no effect unless you first specify full-screen mode as described in apple-apple-mobile-web-app-capable.
If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.
 
最后更新于2020年2月18日

[^footnote]: timestamp-最后更新于2020年2月18日