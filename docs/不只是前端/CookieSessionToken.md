---
sidebar_position: 4
---

登录成功返回登录凭证。

我们需要这样一个登录凭证的主要原因就是 http 是一个无状态的协议，登录的时候我们需要输入用户名和密码，登录成功之后，我们要以刚刚登录的身份通过 http 请求去访问其他的数据和资源，但是因为 http 是无状态的，每个请求完全独立，服务端无法分辨上一次的请求发送者和这一次的发送者是不是同一个人。所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。

常见的登录凭证有两种：

- cookie+session
- Token 令牌

## Cookie

Cookie(复数形态 Cookies)为“小型文本文件，一些网站为了辨别用户身份而存储在用户本地终端(Client Side)上的数据，会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

Cookie 总是保存在客户端中，按在客户端中的存储位置，Cookie 可以分为内存 Cookie 和硬盘 Cookie：

- 内存 Cookie 由浏览器维护，保存在内存中，浏览器关闭时 Cookie 就会消失，其存在时间是短暂的；
- 硬盘 Cookie 保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理；

没有设置过期时间，默认情况下 cookie 是内存 cookie，在关闭浏览器时会自动删除；设置了过期时间，并且过期时间不为 0 或者负数，是硬盘 cookie，需要手动或者到期时，才会删除；

### Cookie 的生命周期

默认情况下的 cookie 是内存 cookie，也称之为会话 cookie，也就是在浏览器关闭时会自动被删除；

我们可以通过设置 expires 或者 max-age 来设置过期的时间：

- expires:设置的是 Date.toUTCString()，设置格式是：expires=date-in-GMTString-format；
- max-age:设置过期的秒钟，max-age=max-age-in-seconds (例如一年为 `60*60*24\*365`)；

```js
// expires
var d = new Date();
var n = d.toUTCString(); // Fri, 25 Feb 2022 12:43:50 GMT

// max-age 用的更多
```

### Cookie 的作用域（允许 Cookie 发给哪些 URL）

cookie 是不可跨域的： 每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 domain）

Domain：指定哪些主机可以接受 cookie

- 如果不指定，那么默认是 origin，不包括子域名（developer.mozilla.org 域名下打开控制台看不到相应的 cookie）
- 如果指定 Domain，则包含子域名。例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中(如 developer.mozilla.org，请求中会携带 cookie)，适用于单点登录

Path：指定主机下哪些路径可以接受 Cookie（未指定则主机下路径都可以接受 cookie）

- 例如，设置 Path=/docs，则以下地址都会匹配：
  - /docs
  - /docs/Web/
  - /docs/Web/HTTP

### cookie 重要的属性

- name=value
  键值对，设置 Cookie 的名称及相对应的值，都必须是字符串类型

  - 如果值为 Unicode 字符，需要为字符编码
  - 如果值为二进制数据，则需要使用 BASE64 编码

- domain
  指定 cookie 所属域名，默认是当前域名

- path
  指定 cookie 在哪个路径（路由）下生效，默认是 '/'。如果设置为 /abc，则只有 /abc 下的路由可以访问到该 cookie，如：/abc/read。

- maxAge
  cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器即失效，浏览器也不会以任何形式保存该 cookie 。如果为 0，表示删除该 cookie 。默认为 -1。- 比 expires 好用。

- expires
  过期时间，在设置的某个时间点后该 cookie 就会失效。一般浏览器的 cookie 都是默认储存的，当关闭浏览器结束这个会话的时候，这个 cookie 也就会被删除

- secure
  该 cookie 是否仅被使用安全协议传输。安全协议有 HTTPS，SSL 等，在网络上传输数据之前先将数据加密。默认为 false。当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效。

- httpOnly
  如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息，但还是能通过 Application 中手动修改 cookie，所以只是在一定程度上可以防止 XSS 攻击，不是绝对的安全

### 设置 Coookie

```js
// 前端设置 Cookie
document.cookie = "name=123;max-aga=5;"; // 5s后过期，不设置过期时间就是内存cookie，关闭浏览器就消失

// 后端设置 Cookie
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const testRouter = new Router();

testRouter.get("/test", (ctx, next) => {
  // maxAge 对应的是毫秒
  ctx.cookies.set("name", "123", {
    maxAge: 5 * 1000,
  });
  ctx.body = "test";
});

// 会在请求头加上Cookie字段
testRouter("/demo", (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get("name");
  ctx.body = "你的Cookie是" + value;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
  console.log("服务器启动成功～");
});
```

### cookie 跨域

解决跨域携带 cookie：

- 前端请求的时候设置 request 对象的属性 withCredentials 为 true
- 对方的服务端设置 Access-Control-Allow-Origin 为 http://xxx:${port}
- 对方的服务端设置 Access-Control-Allow-Credentials 为 true

背景是 index.html 是跑在 A 服务上，并且在 A 服务下种了一个 cookie，现在去请求 B 服务的一个接口。

1. XMLHttpRequest.withCredentials 属性是一个 Boolean 类型，它指示了是否该使用类似 cookies,authorization headers(头部授权)或者 TLS 客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求。在同一个站点下使用 withCredentials 属性是无效的。如果在发送来自其他域的 XMLHttpRequest 请求之前，未设置 withCredentials 为 true，那么就不能为它自己的域设置 cookie 值。而通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略，因此不能被通过 document.cookie 或者从头部相应请求的脚本等访问。

```js
// 修改跨域请求的代码
crossButton.onclick = function () {
  axios({
    withCredentials: true, // ++ 新增
    method: "get",
    url: "http://localhost:8003/anotherService",
  }).then((res) => {
    console.log(res);
  });
};
```

2. 在服务端设置 Access-Control-Allow-Origin

```js
// 在所有路由前增加，可以拦截所有请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  next();
});
```

3. 在服务端设置 Access-Control-Allow-Credentials

```js
// 在所有路由前增加，可以拦截所有请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
  next();
});
```

## session

session 是另一种记录服务器和客户端会话状态的机制

session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的 cookie 中

![image](https://tva4.sinaimg.cn/large/006T9etDly1gzq4jg10sqj310w0jewj3.jpg)

session 认证流程：

- 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session
- 请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器
- 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名
- 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作

在 koa 中，我们可以借助于 koa-session 来实现 session 认证：

1. `signed: true // 签名 打开；这里默认就是true`
2. `app.keys = ['some secret'] //加盐的方式 生成签名`

cookies 中会有 sessionid 和 加密之后的 sessionid.sig，每次请求都会匹配 cookie 的 sessionid.sig 和服务器计算之后 sessionid.sig 是否一致

![image](https://tva1.sinaimg.cn/large/006T9etDly1gzq5edjh97j30x606o419.jpg)

```js
sessionid.sig对应的value === hash(sessionid对应的value + ["some secret"])
  ? "成功"
  : "失败";
```

```js
const Koa = require("koa");
const Router = require("koa-router");
// 导出的是一个函数
const Session = require("koa-session");

const app = new Koa();

const testRouter = new Router();

// 创建Session的配置
const session = Session(
  {
    key: "sessionid",
    // 这里传的也是一个毫秒
    maxAge: 10 * 1000,
    signed: true, // 是否使用加密签名
  },
  app
);

// 加盐的方式 生成签名
app.keys = ["aaaa"];
app.use(session);

// 登录接口
testRouter.get("/test", (ctx, next) => {
  // 根据用户输入的 name/password -> 数据库查询到的 id/name
  const id = 110;
  const name = "kobe";
  // 会对这个数据做 base64 编码作为 session（也会作为 sesionid 的 value），放到cookie里，key 就是之前设置的 sessionid
  ctx.session.user = { id, name };

  ctx.body = "test";
});

testRouter.get("/demo", (ctx, next) => {
  console.log(ctx.session.user); // 服务器会做一个解码 {id: 110, name: "kobe"}
  ctx.body = "demo";
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
  console.log("服务器启动成功~");
});
```

## Token

Token 一般会被译作令牌。

通常有两种 token，AccessToken 和 Refresh Token：

- Access Token 就是访问资源接口（API）时所需要的资源凭证
- Refresh Token 用来更新 Access Token

### Access Token 的认证流程

![image](https://tva3.sinaimg.cn/large/006T9etDly1gzq5pdxvquj311i0fydjz.jpg)

1. 客户端使用用户名跟密码请求登录
2. 服务端收到请求，去验证用户名与密码
3. 验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端
4. 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 token
6. 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据

每一次请求都需要携带 token，需要把 token 放到 HTTP 的 Header 里

基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。**用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库** -- 时间换空间

token 完全由应用管理，所以它可以避开同源策略

简单 token 的组成：

- uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）

特点：

- 服务端无状态化、可扩展性好
- 支持移动端设备
- 支持跨程序调用

### Refresh Token 的认证流程

![image](https://tvax2.sinaimg.cn/large/006T9etDly1gzq5pp75y4j310y0nyqac.jpg)

access token 过期的话就用 refresh token 去更新 access token，无需用户进行额外的操作。

Access Token 的有效期比较短，当 Acesss Token 由于过期而失效时，使用 Refresh Token 就可以获取到新的 Token，如果 Refresh Token 也失效了，用户就只能重新登录了。

Refresh Token 及过期时间是存储在服务器的数据库中，只有**在申请新的 Acesss Token 时才会验证 Refresh Token**，不会对业务接口响应时间造成影响，也不需要向 Session 一样一直保持在内存中以应对大量的请求

## JWT

JWT（JSON Web Token） 可以理解为一种生成 Token 的机制。

可以参考 阮一峰老师的这篇博客：[JSON Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

JWT 生成的 token 主要有三部分组成：

- header：heade 部分是一个 JSON 对象，有两个属性：

  - alg 属性表示签名的算法（algorithm），默认是 HMAC SHA256（写成 HS256）；
  - typ 属性表示这个令牌（token）的类型（type），JWT 令牌统一写为 JWT。
  - 最后，将上面的 JSON 对象使用 Base64URL 算法转成字符串

  ```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  ```

- payload：也是一个 JSON 对象，就是携带的数据
  - 携带的数据，比如我们可以将用户的 id 和 name 放到 payload 中
  - 默认也会携带 iat(issued at)，令牌的签发时间
  - 我们也可以设置过期时间:exp(expiration time)
  - 会通过 base64Url 算法进行编码
- signature：对前两部分的签名，防止数据篡改
  - 设置一个 secretKey，使用 Header 里面指定的签名算法（默认是 HMAC SHA256）按照下面公式生成签名
  - 生成签名：HMACSHA256(base64UrlEncoded(header)+.+base64UrlEncoded(payload), secretKey);

算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。

![image](https://tva3.sinaimg.cn/large/006T9etDly1gzq6nx4u7vj30yi0f6tbx.jpg)

前面提到，Header 和 Payload 串型化的算法是 Base64URL。这个算法跟 Base64 算法基本类似，但有一些小的不同。

JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 `api.example.com/?token=xxx`）。Base64 有三个字符`+`、`/`和`=`，在 URL 里面有特殊含义，所以要被替换掉：`=`被省略、`+`替换成`-`，`/`替换成`\_` 。这就是 Base64URL 算法。

客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。

![image](https://tvax4.sinaimg.cn/large/006T9etDly1gzq6iw2a2zj310y0liadm.jpg)

```js
const Koa = require("koa");
const Router = require("koa-router");
// 这个库会自动带上 token 签发时间
const jwt = require("jsonwebtoken");

const app = new Koa();
const testRouter = new Router();

// 密钥 secretKey 加密解密使用
const SERCET_KEY = "abccba123";

// 登录接口
testRouter.post("/test", (ctx, next) => {
  const user = { id: 110, name: "why" };
  // 生成 token，参数是 payload、secretKey
  const token = jwt.sign(user, SERCET_KEY, {
    // 过期时间 s
    expiresIn: 10,
  });

  ctx.body = token;
});

// 验证接口
testRouter.get("/demo", (ctx, next) => {
  // 服务端拿到请求头携带的 token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  try {
    // 验证 token，验证失败会直接抛出异常，所以要用 try\catch 捕获
    const result = jwt.verify(token, SERCET_KEY);
    ctx.body = result;
  } catch (error) {
    console.log(error.message);
    ctx.body = "token是无效的~";
  }
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
  console.log("服务器启动成功~");
});
```

上面的代码就是当用户访问一个受保护的路由或者资源的时候（/demo）:

- 可以把它放在 Cookie 里面自动发送，但是这样不能跨域
- 更好的做法是放在 HTTP 请求头信息的 Authorization 字段里，使用 Bearer 模式添加 JWT
  ```
  GET /calendar/v1/events
  Host: api.example.com
  Authorization: Bearer <token>
  ```

前端通过登录拿到返回过来的 token，可以将它存在 localStorage 里，然后再以后的请求中把 token 放在请求头的 Authorization 里带给服务端。
这里以 axios 请求为例，在发送请求时，通过请求拦截器把 token 塞到 header 里：

```js
//请求拦截器
axios.interceptors.request.use(
  function (config) {
    //从localStorage里取出token
    const token = localStorage.getItem("tokenName");
    //把token塞入Authorization里
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
```

```js
var req = new XMLHttpRequest();
req.open("POST", "/", true);
req.onreadystatechange = function () {
  if (req.readyState != 4 || req.status != 200) return;
  alert("Success: " + req.responseText);
};
req.setRequestHeader("Authorization", `Bearer ${token}`);
req.send("banana=yellow");
```

用户的状态不会存储在服务端的内存中，这是一种 无状态的认证机制，服务端的保护路由将会检查请求头 Authorization 中的 JWT 信息，如果合法，则允许用户的行为。并且减少了需要查询数据库的需要。

因为 JWT 并不使用 Cookie ，所以你可以使用任何域名提供你的 API 服务而不需要担心跨域资源共享问题（CORS）

token 也可以通过 URL 传输

```
http://www.example.com/user?token=xxx
```
