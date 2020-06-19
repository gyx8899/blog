##Vue - fragment knowledge

---

### Basic
* Lib import:
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

* Directives:
```html
<span v-bind:title="message">
<p v-if="seen">现在你看到我了</p>
<li v-for="todo in todos">
	{{ todo.text }}
</li>
<button v-on:click="reverseMessage">逆转消息</button>
<input v-model="message">
<form v-on:submit.prevent="onSubmit">...</form>
```

### Attentions

* Data using:
```javascript
// 1.1 dot VS $
var vm = new Vue({
  data: data
})

// Freeze
Object.freeze(obj)

// 它们引用相同的对象！
vm.a === data.a // => true

// 1.2 dot VS $
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})

```

### New Features

```javascript

```

```html
<span v-once>这个将不会改变: {{ msg }}</span>
<div v-bind:id="'list-' + id"></div>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>

<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>

<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
<div v-bind:class="[activeClass, errorClass]"></div>
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
<div v-bind:class="[{ active: isActive }, errorClass]"></div>

<div v-bind:style="[baseStyles, overridingStyles]"></div>
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
<div v-bind:style="styleObject"></div>
```
```javascript
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

```
Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：
```


最后更新于2020年2月18日

[^footnote]: timestamp-最后更新于2020年2月18日