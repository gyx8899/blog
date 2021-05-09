# CSS 特殊用法

## 精选技巧

- Website: Support dark mode

> When your system uses Dark Mode (System Preferences -> General -> Appearance -> Dark)

```css
body {
    color: black;
    background: white;
}

@media (prefers-color-scheme: dark) {
    body {
        color: white;
        background: black;
    }
}
```

- [给透明图片加非透明区域阴影 - drop-shadow](https://codepen.io/denic/pen/MWeGqJb)

```css
.box-shadow {
    box-shadow: 2px 4px 8px #585858;
}

.drop-shadow {
    filter: drop-shadow(2px 4px 8px #585858);
}
```

- [锚点定位滚动动画 css](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)，

[注意兼容性](https://caniuse.com/?search=scroll-behavior)

```css
/* body 或指定的 container */
body {
    scroll-behavior: smooth;
}
```

- [设定某区域光标自定义图片或 emoji](https://codepen.io/denic/pen/bGVpOPj)

```css
.cursor-image {
    cursor: url(https://picsum.photos/20/20), auto;
}
.cursor-emoji {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>"),
        auto;
}
```

- [文字超长显示...](https://codepen.io/denic/pen/LYpZKMg)

```css
.overflow-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.overflow-multi-lines {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```

- [通过伪类`:target`实现模态框](https://codepen.io/denic/pen/ZEbKgPp)

```html
<!-- 注意锚点的使用 -->
<div class="wrapper">
    <a href="#demo-modal">Open Demo Modal</a>
</div>

<div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>CSS Only Modal</h1>
        <p>
            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
        </p>
        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
```

```css
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

/* 重点：伪类 target */
/* :target CSS 伪类 代表一个唯一的页面元素(目标元素)，其id 与当前URL片段匹配. */
.modal:target {
  visibility: visible;
  opacity: 1;
}
```

- [伪类`:empty`可以对 no children / text 进行样式调整](https://codepen.io/denic/pen/KKMpZdP)

```css
.box {
  background: #999;
}
.box:empty {
  background: #fff;
}
```

- [自定义滚动条样式](https://codepen.io/denic/pen/NWrZmwV)

```css
/* 注意兼容性 */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #eff1f5;
}

.custom-scrollbar::-webkit-scrollbar-track{
  border-radius: 3px;
  background-color: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb{
  border-radius:5px;
  background-color:#515769;
  border:2px solid #eff1f5
}
```

- [CSS 实现的动态 tooltip](https://codepen.io/denic/pen/zYobqqa)

```html
<!-- 重点1：data-tooltip -->
<p>
  You can also hover <span class="tooltip" data-tooltip="This is Tooltip Content">here</span> to see another example.
</p>
```

```css
.tooltip {
  position: relative;
  border-bottom: 1px dotted black;
}

/* Tooltip box */
.tooltip:before {
  content: attr(data-tooltip); 
  position: absolute;
  width: 100px;
  background-color: #062B45;
  color: #fff;
  text-align: center;
  padding: 10px;
  line-height: 1.2;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity .6s;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  font-size: 0.75em;
  visibility: hidden;
}

/* Tooltip arrow */
.tooltip:after {
  content: "";
  position: absolute;
  bottom: 75%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  opacity: 0;
  transition: opacity .6s;
  border-color: #062B45 transparent transparent transparent;
  visibility: hidden;
}

.tooltip:hover:before, .tooltip:hover:after {
  opacity: 1;
  visibility: visible;
}
```

- 自定义输入框光标的颜色

```css
input {
    /* 注意兼容性 */
    caret-color: red;
}
```

- input 的 伪类 `::in-range` `:out-of-range`

```html
<label for="numberInput">合法整数：1-10</label>
<input id="numberInput" type="number" max="10" min="1">
```

```css
input:in-range {
    background-color: #dfdfdf;
}
input:out-of-range {
    background-color: red;
    border: 1px solid red;
}
```