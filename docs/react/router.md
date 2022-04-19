---
sidebar_position: 3
---

路由可以理解为 url 到函数的映射，浏览器地址栏变化，展示给用户的页面也不相同。

路由经历了两个时期：

- 后端路由
- 前端路由

后端路由就是通过用户请求的 url 导航到具体的 html 页面，可以认为后端路由是一个文件读取操作，把函数返回值返还给客户端。

对于前端路由来说就是 url 的映射函数去执行一些 DOM 的显示和隐藏操作。这样，当访问不同的路径的时候，会显示不同的页面组件。

## 前端路由的实现

总的来说，前端路由有两种实现方式：

- hash
- history

都是为了改变 url

### hash

```
https://juejin.cn/post/7019481143372152862?utm_source=gold_browser_extension#heading-1
```

打印 location.hash 会得到`"#heading-1"`

hash 也存在下面几个特性：

- URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。
- hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换。
- 用 hashchange 事件来监听 hash 的变化。

触发 hsah 变化的方式也有两种

1. 通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 就会发生改变，也就会触发 hashchange 事件了：

```js
<a href="#heading-2">srtian</a>
```

2. 直接对 loaction.hash 进行赋值，从而改变 URL，触发 hashchange 事件：

```
location.hash="#heading-2"
```

### history

HTML5，提供了 History API 来实现 URL 的变化。最主要的 API 有两个：history.pushState()和 history.repalceState()。

**这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。**唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。此外，这两个 api 都接受三个参数：

```js
window.history.pushState(null, null, "http://www.163.com");
```

- 状态对象（state object）：一个 JavaScript 对象，与用 pushState()方法创建的新历史记录条目关联。无论何时用户导航到新创建的状态，会触发 popstate 事件，并能在事件中使用该对象
- 标题（title）：一般浏览器会忽略，最好传入 null
- 地址（URL）：就是需要新增的历史记录的地址，浏览器不会去直接加载改地址，但后面也可能会去尝试加载该地址。此外需要注意的是，传入的 URL 与当前 URL 应该是同源的

:::tip
history 模式改变 url 后，强制刷新浏览器时，（如果后端没有做准备的话）会报错，因为刷新是拿当前地址去请求服务器的，如果服务器中没有相应的响应，会出现 404 页面。这需要在服务端做处理：如果匹配不到任何静态资源，则应该始终返回同一个 html 页面

```
location / {
    try_files $uri $uri/ /index.html;
}
```

:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p id="example">
      <a href="/name" title="name">name</a>
      <a href="/age" title="age">age</a>
    </p>
    <div class="main" id="main"></div>
    <script>
      (function () {
        var examplebox = document.getElementById("example");
        var mainbox = document.getElementById("main");

        examplebox.addEventListener("click", function (e) {
          e.preventDefault();
          var elm = e.target;
          var uri = elm.href;
          var tlt = elm.title;
          history.pushState({ path: uri, title: tlt }, null, uri);
          mainbox.innerHTML = "current page is " + tlt;
        });
        window.addEventListener("popstate", function (e) {
          var state = e.state;
          mainbox.innerHTML = "current page is " + state.title;
        });
      })();
    </script>
  </body>
</html>
```

### react-router

```js
<Router>
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/:user" component={User} />
  </Switch>
</Router>
```

![image](https://tvax3.sinaimg.cn/large/006T9etDly1h09sfwt94gj310c0rstcq.jpg)

About 和 User 这两个 component 一直都存在。当路由发生改变时，与 URL 相匹配的 component 机会被成功渲染。而不匹配的 component 就设置为 null。

- [单页面应用路由实现原理：以 React-Router 为例](https://github.com/youngwind/blog/issues/109)
