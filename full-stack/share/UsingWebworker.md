# 轻松使用WebWorker，解放耗时较大的算法代码

> Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。

## 基础知识
[MDN-web-worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

MDN 讲解的已经较详细，此处不再重复。

## 常规用法

### main.js
```javascript
var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker.js");

// onkeyup could be used instead of onchange if you wanted to update the answer every time
// an entered value is changed, and you don't want to have to unfocus the field to update its .value

	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
	  console.log('Message posted to worker');
	};

	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
```

### worker.js
```javascript
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

## 巧妙用法
通过使用封装好的WebWorker类和整理后的worker.js：
1. 简化了对Worker类的调用；
2. 无需进一步修改worker.js内部方法；
3. 可以执行在任意脚本文件中的方法，无需copy到worker.js文件中；

### WebWorker类

WebWorker.js
```javascript
// 封装了一个WebWorker类
class WebWorker {
	constructor(options)
	{
		if (window.Worker && options.workerUrl)
		{
			this.worker = new Worker(options.workerUrl);
			this.onMessage();
			this.onError(options && options.errorCallback);
		}
		else
		{
			alert('Browser does not support Worker, or workerUrl not set!');
		}
	}

	static getInstance(options)
	{
		if (!this.instance)
		{
			this.instance = new WebWorker(options);
		}
		return this.instance;
	}

	onMessage()
	{
		this.worker.onmessage = function (e) {
			if (e.data)
			{
				let {result, callback} = e.data;
				call(callback, result);
			}
			else
			{
				alert(`onmessage error: ${e}!`);
			}
			// throw new Error('Something wrong!'); // onerror
		};
	}

	postMessage(method = null, params = [], callback = null, scripts = [], isClose = false)
	{
		scripts = Array.isArray(scripts) ? scripts : [scripts];
		this.worker.postMessage({method, params, callback, scripts});
	}

	onError(errorCallback)
	{
		this.worker.onerror = function (err) {
			console.table(err);
			errorCallback && errorCallback(err);
		};
	}

	terminate()
	{
		this.worker.terminate();
	}
}
/**
 * A funtcion which can easily invoke function from a string method name
 * @param method, eg: 'alert', 'math.floor', 'math.floor.toString'
 * @param params
 * @return {Promise<any>}
 */
const call = (method, params) => {
	let callMethod = (callers, thisArg) => {
		let caller = callers.shift();
		thisArg = thisArg || window;
		thisArg = thisArg[caller];
		if (callers.length > 0)
		{
			thisArg = callMethod(callers, thisArg);
		}
		return thisArg;
	};
	return new Promise((resolve) => {
		let callers = method.split('.');
		params = Array.isArray(params) ? params : [params];
		let result = callMethod(callers)(...params);
		resolve(result);
	});
};
```

### math.js: 耗时大，且会阻塞线程影响浏览器渲染的方法
```javascript
function isPrime (number) => {
	if (number === 0 || number === 1)
	{
		return true;
	}
	for (let i = 2; i <= Math.sqrt(number); i++)
	{
		if (number % i === 0)
		{
			return false;
		}
	}
	return true;
};
```

### worker.js: 一个专用worker仅仅能被生成它的脚本所使用。
```javascript
const call = (method, params) => {
	let callMethod = (callers, thisArg) => {
		let caller = callers.shift();
		thisArg = (thisArg ? thisArg : this)[caller];
		if (callers.length > 0)
		{
			thisArg = callMethod(callers, thisArg);
		}
		return thisArg;
	};
	return new Promise((resolve) => {
		let callers = method.split('.');
		params = Array.isArray(params) ? params : [params];
		let result = callMethod(callers)(...params);
		resolve(result);
	});
};

const applyMethod = (data) => {
	let {method, params, scripts} = data;
	scripts && importScripts.apply(this, scripts);
	return call(method, params);
};

// WebWorker
onmessage = function (e) {
	let {method, params, scripts, callback, isClose} = e.data;
	applyMethod({method, params, scripts})
			.then((result) => {
				postMessage({result: result, callback: callback});
				isClose && close();
			});
};
```

### main.js: 引入到页面，初始化WebWorker
```javascript
const options = {
	workerUrl: window.location.origin + '/worker.js'
};

// postMessage(methodName, params, callbackName, scripts, isClose);
WebWorker.getInstance(options).postMessage('isPrime', '1000001111111111', 'console.log', [window.location.origin + '/math.js']);
```

通过main.js的调用方法，可以使任意文件的方法被调用。

## 使用注意：
1. workerUrl: 使用绝对地址或者相对WebWorker.js的地址（Worker是在WebWorker中初始化的）；
2. scripts: 被引入的script文件必须是传统JS库；
> “依赖传统JS库”意为着被依赖的JS文件，很有可能不是 CMD，AMD，UMD或ES 6模块文件。相反，所谓的传统JS库文件通常是被包装成为一个IIFE表达式（即，一个立即执行的大闭包），并且输出一个全局变量作为暴露API集的顶层命名空间。

[测试示例](https://gyx8899.github.io/YX-JS-ToolKit/pages/webworker/webworker.html)