---
sidebar_position: 6
---

## 概述

Web 程序最初的目的就是将信息（数据）放到公共的服务器，让所有网络用户都可以通过浏览器访问。

在 Ajax 出现之前，我们可以通过以下几种方式让浏览器发出对服务端的请求，获得服务端的数据：

- 地址栏输入地址，回车，刷新
- 特定元素的 href 或 src 属性
- 表单提交

这些方案都会重新加载整个页面。

AJAX（Asynchronous JavaScript and XML），最早出现在 2005 年的 Google Suggest，是在浏览器端进行网络编程（发送请求、接收响应）的技术方案，它使我们可以通过 JavaScript 直接获取服务端最新的内容而不必重新加载页面。让 Web 更能接近桌面应用的用户体验。

AJAX 就是浏览器提供的一套 API，可以通过 JavaScript 调用，实现网络编程。用代码控制请求与响应。

## 快速上手

使用 AJAX 的过程可以类比平常我们访问网页过程

```js
// 1. 创建一个 XMLHttpRequest 类型的对象 —— 相当于打开了一个浏览器
var xhr = new XMLHttpRequest();
// 2. 打开与一个网址之间的连接 —— 相当于在地址栏输入访问地址
xhr.open("GET", "./time.php");
// 4. 指定 xhr 状态变化事件处理函数 —— 相当于处理网页呈现后的操作
xhr.onreadystatechange = function () {
  // 通过 xhr 的 readyState 判断此次请求的响应是否接收完成
  if (this.readyState === 4) {
    // 通过 xhr 的 responseText 获取到响应的响应体
    console.log(this);
  }
};
// 3. 通过连接发送一次请求 —— 相当于回车或者点击访问发送请求
xhr.send(null);
```

### readyState

> 一定在发送请求 send() 之前注册 readystatechange 事件（不管同步或者异步，xhr.onreadystatechange）：为了让这个事件可以更加可靠（一定触发），一定是先注册

**当 readyState 的值改变的时候，callback 函数会被调用（readystatechange 事件触发）。**这个回调函数会被用户线程所调用。

由于 readystatechange 事件是在 xhr 对象的 readyState 属性状态变化时触发，也就意味着这个事件会被触发多次，所以我们有必要了解每一个状态值代表的含义：

| readyState | 状态描述         | 说明                                                   |
| ---------- | ---------------- | ------------------------------------------------------ |
| 0          | UNSENT           | 代理（XHR）被创建，但尚未调用 open()方法。             |
| 1          | OPENED           | open()方法已经被调用，建立了连接。                     |
| 2          | HEADERS_RECEIVED | send()方法已经被调用，并且已经可以获取状态行和响应头。 |
| 3          | LOADING          | 响应体下载中，responseText 属性可能已经包含部分数据。  |
| 4          | DONE             | 响应体下载完成，可以直接使用 responseText。            |

```js
var xhr = new XMLHttpRequest();
// 代理（XHR）被创建，但尚未调用 open() 方法。
console.log(xhr.readyState);
// => 0

xhr.open("GET", "./time.php");

// open() 方法已经被调用，建立了连接。
console.log(xhr.readyState);
// => 1

xhr.onreadystatechange = function () {
  console.log(this.readyState);
  // send() 方法已经被调用，并且已经可以获取状态行和响应头。
  // => 2
  // 响应体下载中， responseText 属性可能已经包含部分数据。
  // => 3
  // 响应体下载完成，可以直接使用 responseText。
  // => 4
};
xhr.send(null);
```

通过理解每一个状态值的含义得出一个结论：一般我们都是在 readyState 值为 4 时，执行响应的后续逻辑。

```js
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 后续逻辑......
  }
};
```

### HTTP

本质上 XMLHttpRequest 就是 JavaScript 在 Web 平台中发送 HTTP 请求的手段，所以我们发送出去的请求任然是 HTTP 请求，同样符合 HTTP 约定的格式：

```js
// 设置请求报文的请求行
xhr.open("GET", "./time.php");
// 设置请求头
xhr.setRequestHeader("Accept", "text/plain");

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 获取响应状态码
    console.log(this.status);
    // 获取响应状态描述
    console.log(this.statusText);
    // 获取响应头信息
    console.log(this.getResponseHeader("Content-Type")); // 指定响应头
    console.log(this.getAllResponseHeader()); // 全部响应头
    // 获取响应体
    console.log(this.responseText); // 文本形式
    console.log(this.responseXML); // XML 形式，了解即可不用了
  }
};
// 设置请求体
xhr.send(null);
```

## 具体用法

open 方法与服务器建立连接

```js
// get 方式
xhr.open("get", "test.php", true);

// post 方式发送数据 需要设置请求头
xhr.open("post", "test.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

向服务器发送数据

```js
// get 不需要传递参数
xhr.send(null);

// post 需要传递参数
xhr.send("name=jay&age=18");
```

### GET 请求

通常在一次 GET 请求过程中，参数传递都是通过 URL 地址中的 ? 参数传递。

```js
var xhr = new XMLHttpRequest();
// GET 请求传递参数通常使用的是问号传参
// 这里可以在请求地址后面加上参数，从而传递数据到服务端
xhr.open("GET", "./delete.php?id=1");
// 一般在 GET 请求时无需设置响应体，可以传 null 或者干脆不传
xhr.send(null);
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
};

// 一般情况下 URL 传递的都是参数性质的数据，而 POST 一般都是业务数据
```

### POST 请求

POST 请求过程中，都是采用请求体承载需要提交的数据。

```js
var xhr = new XMLHttpRequest();
// open 方法的第一个参数的作用就是设置请求的 method
xhr.open("POST", "./add.php");
// 设置请求头中的 Content-Type 为 application/x-www-form-urlencoded
// 标识此次请求的请求体格式为 urlencoded 以便于服务端接收数据
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 需要提交到服务端的数据可以通过 send 方法的参数传递
// 格式：key1=value1&key2=value2

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
};

xhr.send("key1=value1&key2=value2");
```

### 同步与异步

xhr.open() 方法第三个参数要求传入的是一个 bool 值，其作用就是设置此次请求是否采用异步方式执行，默认为 true，如果需要同步执行可以通过传递 false 实现：

```js
console.log("before ajax");
var xhr = new XMLHttpRequest();
// 默认第三个参数为 true 意味着采用异步方式执行
xhr.open("GET", "./time.php", true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 这里的代码最后执行
    console.log("request done");
  }
};
console.log("after ajax");
```

如果采用同步方式执行，则代码会在 xhr.send() 这一步阻塞：

```js
console.log("before ajax");
var xhr = new XMLHttpRequest();
// 同步方式
xhr.open("GET", "./time.php", false);
// 同步方式 执行需要 先注册事件再调用 send，否则 readystatechange 无法触发
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log("request done");
  }
};
xhr.send(null);
console.log("after ajax");
```

## Ajax 请求封装

```js
/**
 * 发送一个 AJAX 请求
 * @param {String} method 请求方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Function} done 请求完成过后需要做的事情（委托/回调）
 */
function ajax(method, url, params, done) {
  // 统一转换为大写便于后续判断
  method = method.toUpperCase();
  // 对象形式的参数转换为 urlencoded 格式 key=value&key=value
  var pairs = [];
  for (var key in params) {
    pairs.push(key + "=" + params[key]);
  }
  var querystring = pairs.join("&");
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState !== 4) return;
    // 尝试通过 JSON 格式解析响应体
    try {
      done(JSON.parse(this.responseText));
    } catch (e) {
      done(this.responseText);
    }
  });
  // 如果是 GET 请求就设置 URL 地址 问号参数
  if (method === "GET") {
    url += "?" + querystring;
  }
  xhr.open(method, url);
  // 如果是 POST 请求就设置请求体
  var data = null;
  if (method === "POST") {
    xhr.setRequestHeader("Content‐Type", "application/x‐www‐form‐urlencoded");
    data = querystring;
  }
  xhr.send(data);
}
ajax("get", "./get.php", { id: 123 }, function (data) {
  console.log(data);
});
ajax("post", "./post.php", { foo: "posted data" }, function (data) {
  console.log(data);
});
```

## 执行过程分析

ajax 请求确实是异步的，不过这请求是由浏览器新开一个线程请求，当请求的状态变更时，如果先前已设置回调，该线程就产生状态变更事件放到 JavaScript 引擎的处理队列中等待处理，当任务被处理时，JavaScript 引擎始终是单线程运行回调函数，具体点即还是单线程运行 onreadystatechange 所设置的函数。

> 在 JS 里，永远都是用同步去模拟异步，具体讲是用一个队列存储事件处理函数然后等待 js 引擎处理，JavaScript 引擎始终是单线程运行回调函数。
