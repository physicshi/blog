---
sidebar_position: 2
---

进程是资源分配的基本单位，是一个动态的概念，就是程序的一次执行过程，如果要给进程下一个定义就是程序的执行。

执行过程的状态和申请的资源要记录在一个数据结构中进程控制块 PCB：

- 会记录程序执行到哪里
- 当前进程标识符 pid
- 进程状态(阻塞、运行、就绪)
- 进程通讯用的数据结构

进程包括了：

- 代码（程序段指针-当前进程的程序在内存的什么地方）
- 数据（数据段指针-当前进程的数据在内存的什么地方）
- PCB

NodeJS 里通过 `node app.js` 开启一个服务进程，多进程就是进程的复制（fork），fork 出来的每个进程都拥有自己的独立空间地址、数据栈，一个进程无法访问另外一个进程里定义的变量、数据结构，只有建立了 IPC 通信，进程之间才可数据共享。

```js
// process.js
const http = require("http");

http.createServer().listen(3000, () => {
  process.title = "测试进程 NodeJS"; // 进程进行命名
  console.log(`process.pid: `, process.pid); // process.pid: xxxx
});
```

### NodeJS 中的 process

Node.js 中的进程 Process 是一个全局对象，无需 require 直接使用，给我们提供了当前进程中的相关信息。

- process.env：环境变量，例如通过 process.env.NODE_ENV 获取不同环境项目配置信息
- process.nextTick：这个在谈及 Event Loop 时经常会提到
- process.pid：获取当前进程 id
- process.ppid：当前进程对应的父进程
- process.cwd()：获取当前进程工作目录
- process.platform：获取当前进程运行的操作系统平台
- process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
- 进程事件：process.on('uncaughtException', cb) 捕获异常信息、process.on('exit', cb）进程推出监听
- 三个标准流：process.stdout 标准输出、process.stdin 标准输入、process.stderr 标准错误输出

NodeJS 程序的标准输入流（stdin）、一个标准输出流（stdout）、一个标准错误流（stderr）分别对应 process.stdin、process.stdout 和 process.stderr，第一个是只读数据流，后边两个是只写数据流，对它们的操作按照对数据流的操作方式即可。

## 进程通信

首先说一下，进程间通信的方式：

- 信号量
- 管道
- 消息队列
- 共享内存

信号量就是一个变量，比如通过一个数字来表示，放在 PCB 的一个属性里。可以理解为一个计数器，用来控制访问具有多个实例的某种资源。，信号量的初值为可用资源数量。当进程需要使用资源时，需要对该信号量执行 wait() 操作（减少信号量的计数)。当进程释放资源时，需要对该信号量执行 signal() 操作（增加信号量的计数）。当信号量的计数为 0 时，所有资源都在使用中。之后，需要使用资源的进程将会阻塞，直到计数大于 0。

管道其实就是读写文件的思想，之所以叫管道，是因为只能一个进程读、一个进程写，是单向的（半双工）。

消息队列，新来的消息放到队列尾部，读取消息从头部开始，也是单向的，其实就是实现了`send`、`on`，通过事件的方式传递消息，子进程对象使用 `send()` 方法实现主进程向子进程发送数据，message 事件实现主进程收听由子进程发来的数据。。

共享内存，通过申请一段多进程都可以操作的内存，叫做共享内存。但是在 NodeJS 中并未实现。

### NodeJS 中的进程通信

nodejs 提供了创建进程的 api，有两个模块：child_process 和 cluster。一个是用于父子进程的创建和通信，一个是用于多个进程。

- 具体的，child_process 提供了用于执行 shell 命令的 spawn、exec，用于执行可执行文件的 execFile，用于执行 js 的 fork。提供了 pipe 和 message 两种 ipc 方式。
- cluster 也提供了 fork，提供了 message 的方式进行通信。

:::tip

child_process 模块提供的 API 中最核心的是`.spawn`，其余 API 都是针对特定使用场景对它的进一步封装，算是一种语法糖。

- spawn 以主命令加参数数组的形式创建一个子进程，子进程以流的形式返回 data 和 error 信息。
- exec 是对 spawn 的封装，可直接传入命令行执行，以 callback 形式返回 error stdout stderr 信息
- execFile 类似于 exec 函数，但默认不会创建命令行环境，将直接以传入的文件创建新的进程，性能略微优于 exec
- fork 是 spawn 的特殊场景，只能用于创建 node 程序的子进程，默认会建立父子进程的 IPC 信道来传递消息；衍生新的进程，进程之间相互独立，每个进程都有自己的 V8 实例、内存，系统资源是有限的，不建议衍生太多的子进程出来，通长根据系统 CPU 核心数设置。

通信

一旦子进程被创建，并设置父子进程的通信方式为 IPC（参考 stdio 设置），父子进程即可双向通信。

**进程之间通过 process.send 发送消息，通过监听 message 事件接收消息。**当一个进程发送消息时，会先序列化为字符串，送入 IPC 信道的一端，另一个进程在另一端接收消息内容，并且反序列化，因此我们可以在进程之间传递对象。
:::

#### spawn、exec

如果想通过 shell 执行命令，那就用 spawn 或者 exec。因为一般执行命令是需要返回值的，这俩 api 在返回值的方式上有所不同。
spawn 返回的是 stream，通过 data 事件来取，exec 进一步分装成了 buffer，使用起来简单一些，但是可能会超过 maxBuffer。

```js
// child_process.spawn(command[, args][, options])
const { spawn } = require('child_process');

var app = spawn('node','main.js' {env:{}});

app.stderr.on('data',function(data) {
  console.log('Error:',data);
});

app.stdout.on('data',function(data) {
  console.log(data);
});
```

其实 exec 是基于 spwan 封装出来的，简单场景可以用，有的时候要设置下 maxBuffer。

```js
// child_process.exec(command[, options][, callback])
// 创建一个shell，然后在shell里执行命令。执行完成后，将stdout、stderr作为参数传入回调方法。

const { exec } = require('child_process');

exec('find . -type f', { maxBuffer: 1024*1024 }(err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`); return;
    }
    console.log(stdout);
});
```

#### execFile

除了执行命令外，如果要执行可执行文件就用 execFile 的 api，将直接以传入的文件创建新的进程：

```js
// child_process.execFile(file[, args][, options][, callback])
var child_process = require("child_process");

// execFile的第一个参数就是可执行文件的名字，或者路径
child_process.execFile("node", ["--version"], function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

child_process.execFile(
  "/Users/a/.nvm/versions/node/v6.1.0/bin/node",
  ["--version"],
  function (error, stdout, stderr) {
    if (error) {
      throw error;
    }
    console.log(stdout);
  }
);

// 当然也可以
const { execFile } = require("child_process");

const child = execFile("node", ["./aaa.js"], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
```

#### fork

还有如果是想执行 js ，那就用 fork。fork 衍生新的进程，只能用于创建 node 程序的子进程（spawn 的特殊场景），默认就可以通过 ipc 方式进行通信：

```js
// child_process.fork(modulePath[, args][, options])
// modulePath：子进程运行的模块。

const { fork } = require("child_process");

const xxxProcess = fork("./xxx.js");
xxxProcess.send("111111");
xxxProcess.on("message", (sum) => {
  res.end("22222");
});
```

### 管道

stdin 和 stdout 可以传递 json，双方在标准输入输出中读写 json

```js
// NodeJS 支持了 pipe，通过管道的机制封装出来的，能同步的传输流的数据
const { spawn } = require("child_process");

const find = spawn("cat", ["./aaa.js"]);
const wc = spawn("wc", ["-l"]); // wc用于计算字数 -l是显示行数
// find.stdout -> wc.stdin
find.stdout.pipe(wc.stdin);

find.stdout.on("data", (data) => {
  console.log(data.toString(), "find"); // 打印 aaa.js 的内容
});

wc.stdout.on("data", (data) => {
  console.log(data.toString(), "wc"); // 打印 aaa.js 行数
});
```

比如上面通过管道把一个进程的输出流传输到了另一个进程的输入流，和下面的 shell 命令效果一样：

```
cat ./aaa.js | wc -l
```

`child_process.spawn(command[, args][, options])`

- command: 只执行的命令
- args: 参数列表
- options: 环境变量对象。其中环境变量对象包括 7 个属性：
  - cwd: 子进程的当前工作目录
  - env: 环境变量键值对
  - stdio: 子进程 stdio 配置。该 options.stdio 选项用于配置在父进程和子进程之间建立的管道。
  - customFds: 作为子进程 stdio 使用的文件标示符
  - detached: 进程组的主控制
  - uid: 用户进程的 ID.
  - gid: 进程组的 ID.
  - command：要执行的命令

### message

spawn 支持 stdio 参数，可以设置和父进程的 stdin、stdout、stderr 的关系，比如指定 pipe 或者 null。还有第四个参数，可以设置 ipc，这时候就是通过事件的方式传递消息了，很明显，是基于消息队列实现的。

```js
/* parent.js */
var child = child_process.spawn("node", ["child.js"], {
  stdio: [0, 1, 2, "ipc"],
});

child.on("message", function (msg) {
  console.log(msg);
});

child.send({ hello: "hello" });

/* child.js */
process.on("message", function (msg) {
  msg.hello = msg.hello.toUpperCase();
  process.send(msg);
});
```

可以看到，父进程在创建子进程时，在 options.stdio 字段中通过 ipc 开启了一条 IPC 通道，之后就可以监听子进程对象的 message 事件接收来自子进程的消息，并通过.send 方法给子进程发送消息。在子进程这边，可以在 process 对象上监听 message 事件接收来自父进程的消息，并通过.send 方法向父进程发送消息。**数据在传递过程中，会先在发送端使用 JSON.stringify 方法序列化，再在接收端使用 JSON.parse 方法反序列化。**

而 fork 的 api 创建的子进程自带了 ipc 的传递消息机制，`on('message')`和 `send`，可以直接用。

```js
// 父进程 parent.js
var child_process = require("child_process");
// 开启一个新的子进程
var child = child_process.fork("./xxx.js");
// 当一个子进程使用 process.send() 发送消息时会触发 'message' 事件
child.on("message", function (m) {
  console.log("父进程收到消息 " + JSON.stringify(m));
});
// 向子进程发送消息
child.send({ from: "parent" });

// 子进程 xxx.js
process.on("message", function (m) {
  console.log("子进程收到消息" + JSON.stringify(m));
});
// 向父进程发送消息
process.send({ from: "child" });
```

:::tip

stdio 参数，这个选项用于配置父进程和子进程之间的管道。默认情况下，子进程的 stdin,stdout,stderr 导向了 ChildProcess 这个对象的 child.stdin,child.stdout,child.stderr 流，这和设置 stdio 为['pipe','pipe','pipe']是一样的。

stdio 可以是下面的任何一个字符串：

- 'pipe'：相当于['pipe','pipe','pipe']，为默认选项
- 'ignore'：相当于['ignore','ignore','ignore']
- 'inherit'：相当于[process.stdin,process.stdout,process.stderr] 或者 [0,1,2]

一般情况下，stdio 是一个数组，其中 0,1,2 分别对应于 stdin,stdout,stderr。还可以有第四个参数，用于创建父进程和子进程之间的额外的管道，可以是下面的任何一个值：

- 'pipe'：为子进程和父进程之间创建一个管道。父进程管道的末端会作为 child_process 对象的 ChildProcess.stdio[fd]而存在。fds0-2 创建的管道在 ChildProcess.stdin,ChildProcess.stdout,ChildProcess.stderr 也是存在的
- 'ipc'：用于创建 IPC 通道用于在父进程和子进程之间传输消息。ChildProcess 对象**最多有一个 IPC stdio 配置**，使用这个配置可以启用 ChildProcess 的 send 方法，如果父进程在文件描述符里面写入了 JSON 对象，那么 ChildProcess.on("message")事件就会在父进程上触发。如果子进程是 Node.js 进程，那么 ipc 配置就会启用子进程的 process.send(), process.disconnect(), process.on('disconnect'), and process.on('message')方法。

:::

### cluster

为了更加方便的管理进程、实现端口复用，Node 引入了 cluster 模块。

比如 http server 会根据 cpu 数启动多个进程来处理请求：

```js
import cluster from "cluster";
import http from "http";
import { cpus } from "os";
import process from "process";

const numCPUs = cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  });

  server.listen(8000);

  process.on("message", (msg) => {
    if (msg === "shutdown") {
      server.close();
    }
  });
}
```

它同样支持了事件形式的 api，用于多个进程之间的消息传递，因为多个进程其实也只是多个父子进程的通信，子进程之间不能直接通信，所以还是基于消息队列实现的。

```js
// 计算斐波那契数列第 43 / 44 项
const cluster = require("cluster");
// 计算斐波那契数列第 n 项
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
if (cluster.isMaster) {
  // 主控节点逻辑
  for (let i = 43; i < 45; i++) {
    const worker = cluster.fork(); // 启动子进程
    // 发送任务数据给执行进程，并监听子进程回传的消息
    worker.send({ num: i });
    worker.on("message", (message) => {
      console.log(
        `receive fib(${message.num}) calculate result ${message.data}`
      );
      worker.kill();
    });
  }

  // 监听子进程退出的消息，直到子进程全部退出
  cluster.on("exit", (worker) => {
    console.log("worker " + worker.process.pid + " killed!");
    if (Object.keys(cluster.workers).length === 0) {
      console.log("calculate main process end");
    }
  });
} else {
  // 子进程执行逻辑
  process.on("message", (message) => {
    // 监听主进程发送的信息
    const { num } = message;
    console.log("child pid", process.pid, "receive num", num);
    const data = fib(num);
    process.send({ data, num }); // 将计算结果发送给主进程
  });
}
```

## 线程

线程是轻量级的进程，是调度的基本单位。

要注意，对于现代计算机，程序在操作系统中并不是以进程为单位在执行，而是以一种轻量级进程（Light Weighted Process）——线程（Thread）的形式执行。

**因为线程只被分配了计算资源（CPU），所以被称为轻量级进程。**

> 每一种应用，比如游戏，执行后是一个进程。但是游戏内部需要图形渲染、需要网络、需要响应用户操作，这些行为不可以互相阻塞，必须同时进行，这样就设计成线程。

### NodeJS 中的线程

工作线程 worker_threads：通过 worker_threads 模块中的 Worker 类我们可以通过传入执行文件的路径创建线程。

```js
const { Worker } = require("worker_threads");
// 构造函数的第一个参数是子线程执行的入口脚本程序
const worker = new Worker(filepath);
```

```js
const { Worker, isMainThread } = require("worker_threads");

// isMainThread可以用来判断该进程是不是主线程，如果是主线程，则返回true，否则返回false
if (isMainThread) {
  console.log("This is  a main thread\r\n");
  // 在 Worker 实例中重新加载当前文件，创建子线程
  new Worker(__filename);
} else {
  console.log("Inside Worker!");
  console.log(isMainThread); // Prints 'false'.
}
```

### 线程通信

在 NodeJS 中，当实例运行了一个 Worker 线程之后，两个线程是运行在完全独立的环境中，他们之间的通信是通过基于事件监听机制的 message 来实现的，`new Worker()` 之后会返回一个实例对象，它包含一个 `postMessage ` 方法，可以通过调用这个方法来给 Worker 线程传递信息；同时我们可以给这个对象监听事件`"message"`，这样，就能在 Worker 中触发事件通信的时候接收到数据了

#### 使用 parentPort 进行父子线程通信

worker_threads 中使用了 MessagePort（继承于 EventEmitter）来实现线程通信。worker 线程实例上有 parentPort 属性，是 MessagePort 类型的一个实例，子线程可利用 postMessage 通过 parentPort 向父线程传递数据，示例如下：

```js
const { Worker, isMainThread, parentPort } = require("worker_threads");
// 计算斐波那契数列第 n 项
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
if (isMainThread) {
  // 主线程执行函数
  // __filename 当前模块的文件名
  const worker = new Worker(__filename);
  worker.once("message", (message) => {
    const { num, result } = message;
    console.log(`Fibonacci(${num}) is ${result}`);
    process.exit();
  });
  worker.postMessage(43);
  console.log("start calculate Fibonacci");
  // 继续执行后续的计算程序
  setInterval(() => {
    console.log(`continue execute code ${new Date().getSeconds()}`);
  }, 1000);
} else {
  // 子线程执行函数
  parentPort.once("message", (message) => {
    const num = message;
    const result = fib(num);
    // 子线程执行完毕，发消息给父线程
    parentPort.postMessage({
      num,
      result,
    });
  });
}
```

结果:

```
start calculate Fibonacci
continue execute code 8
continue execute code 9
continue execute code 10
continue execute code 11
Fibonacci(43) is 433494437
```

#### 使用 MessageChannel 实现线程间通信

worker_threads 还可以支持线程间的直接通信，通过两个连接在一起的 MessagePort 端口，worker_threads 实现了双向异步通信的 MessageChannel。线程间可通过 postMessage 相互通信，示例如下：

```js
const { MessageChannel } = require("worker_threads");

const { port1, port2 } = new MessageChannel();

// port1给port2发送信息
port1.postMessage({ carName: "BYD" });

port2.on("message", (message) => {
  console.log("I receive message is ", message);
});

// port2给port1发送信息
port2.postMessage({ personality: "Brave" });
port1.on("message", (message) => {
  console.log("I receive message is ", message);
});
```

运行上面的代码，可以在控制台看到如下输出：

```
I receive message is  { personality: 'Brave' }
I receive message is  { carName: 'BYD' }
```

```js
const {
  isMainThread,
  parentPort,
  threadId,
  MessageChannel,
  Worker,
} = require("worker_threads");

if (isMainThread) {
  const worker1 = new Worker(__filename);
  const worker2 = new Worker(__filename);
  // 创建通信信道，包含 port1 / port2 两个端口
  const subChannel = new MessageChannel();
  // 两个子线程绑定各自信道的通信入口
  worker1.postMessage({ port: subChannel.port1 }, [subChannel.port1]);
  worker2.postMessage({ port: subChannel.port2 }, [subChannel.port2]);
} else {
  parentPort.once("message", (value) => {
    value.port.postMessage(`Hi, I am thread${threadId}`);
    value.port.on("message", (msg) => {
      console.log(`thread${threadId} receive: ${msg}`);
    });
  });
}
```

结果:

```
thread2 receive: Hi, I am thread1
thread1 receive: Hi, I am thread2
```

- https://juejin.cn/post/6995437307159379981
- https://juejin.cn/post/6844903740768518152
