---
sidebar_position: 4
---

```shell
brew update
```

```shell
brew install nginx
```

安装成功后，可执行脚本会自动加入环境变量；

其中关键配置及默认路径如下：

- 安装目录：`--prefix=/opt/homebrew/Cellar/nginx/1.21.5`
- 执行脚本： `/opt/homebrew/Cellar/nginx/1.21.5/bin/nginx`
- 配置文件： `/opt/homebrew/etc/nginx/nginx.conf`
- 日志文件： `/opt/homebrew/var/log/nginx/access.log`
- 错误日志： `/opt/homebrew/var/log/nginx/error.log`

启动：`nginx` ，然后访问 http://localhost:8080/ （默认就是 8080 端口，可在配置文件中修改）

> 另外:
>
> 查看本机地址命令式是：`ifconfig`
>
> 查看端口占用情况：`sudo netstat -tupln | grep 端口号` http 默认端口号是 80

## nginx 架构模型及常用命令操作

master 主进程下面开启一些 worker 子进程

### nginx 常用命令、参数

- `nginx -t` 测试配置是否正确，配置文件修改后先操作验证，再进行后续操作
- `nginx -s reload` 加载最新配置，等待全部子进程结束，然后开辟的新的子进程使用新的配置
- `nginx -s reopen` 重新打开日志，重命名 access.log 文件，并重新创建新的 access.log 文件，再次访问查看变化
- `nginx -s quit` 优雅停止，等待全部子进程处理完毕，不再开启新的子进程
- `nginx -s stop` 立即停止，不等待子进程处理，立即停止所有子进程及主进程

对于其他操作命令，具体可以使用帮助命令 nginx -h 进行查看

确认启动成功，直接访问对应 ip 地址，我们就可以看到 nginx 返回的默认 html 静态欢迎界面了

## 配置项及其含义

### 全局配置区域

当前环境下，nginx 的配置文件在 /etc/nginx 文件夹下，同时，我们可以使用 nginx -V 查看版本，选项配置及模块选项

首先，我们来看一下配置文件的各个区域，我们可以使用 vim 打开进行查看。

```
main # 全局配置区域，nginx核心功能配置
events{ # events 事件区，子进程核心配置

}

http{ # http服务器配置区

    server{ # 不同服务配置区
        location { # location 不同请求路径配置区

        }
    }
}

mail{ # 邮件代理配置区
    server{ # 邮件服务配置区

    }
}
```

### 默认配置解析

如果配置项中出现`include /xx/xx` ，是指引入外部配置项；# 号则是注释内容。

在安装完毕后，可以使用 `egrep -v "#|^$" nginx.conf`打印去掉包含#号和空格的内容，展示默认配置选项进行解读。

```
#运行用户
user nobody;
#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#全局错误日志及PID文件
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

#工作模式及连接数上限
events {
    #epoll是多路复用IO(I/O Multiplexing)中的一种方式,
    #仅用于linux2.6以上内核,可以大大提高nginx的性能
    use   epoll;

    #单个后台worker process进程的最大并发链接数
    worker_connections  1024;

    # 并发总数是 worker_processes 和 worker_connections 的乘积
    # 即 max_clients = worker_processes * worker_connections
    # 在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4  为什么
    # 为什么上面反向代理要除以4，应该说是一个经验值
    # 根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000
    # worker_connections 值的设置跟物理内存大小有关
    # 因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数
    # 而系统可以打开的最大文件数和内存大小成正比，一般1GB内存的机器上可以打开的文件数大约是10万左右
    # 我们来看看360M内存的VPS可以打开的文件句柄数是多少：
    # $ cat /proc/sys/fs/file-max
    # 输出 34336
    # 32000 < 34336，即并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内
    # 所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置
    # 使得并发总数小于操作系统可以打开的最大文件数目
    # 其实质也就是根据主机的物理CPU和内存进行配置
    # 当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。
    # ulimit -SHn 65535

}


http {
    #设定mime类型,类型由mime.type文件定义
    include    mime.types;
    default_type  application/octet-stream;
    #设定日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
    #对于普通应用，必须设为 on,
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile     on;
    #tcp_nopush     on;

    #连接超时时间
    #keepalive_timeout  0;
    keepalive_timeout  65;
    tcp_nodelay     on;

    #开启gzip压缩
    gzip  on;
    gzip_disable "MSIE [1-6].";

    #设定请求缓冲
    client_header_buffer_size    128k;
    large_client_header_buffers  4 128k;


    #设定虚拟主机配置
    server {
        #侦听80端口
        listen    80;
        #定义使用 www.nginx.cn访问
        server_name  www.nginx.cn;

        #定义服务器的默认网站根目录位置
        root html;

        #设定本虚拟主机的访问日志
        access_log  logs/nginx.access.log  main;

        #默认请求
        location / {

            #定义首页索引文件的名称
            index index.php index.html index.htm;

        }

        # 定义错误提示页面
        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
        }

        #静态文件，nginx自己处理
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {

            #过期30天，静态文件不怎么更新，过期可以设大一点，
            #如果频繁更新，则可以设置得小一点。
            expires 30d;
        }

        #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.
        location ~ .php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }

        #禁止访问 .htxxx 文件
            location ~ /.ht {
            deny all;
        }

    }
}
```

## 反向代理

### 基本概念

反向代理是客户端去请求资源被代理服务器拦截，分发到合理的服务或服务器，然后发送给客户端，可以理解为代理的是服务器，客户端不知道自己访问的是真实地服务器还是代理服务器。

正向代理是客户端先把请求发送给正向代理服务器，正向代理服务器再将请求发送出去，获取到资源后，再将资源发送回客户端，可以理解为代理的是客户端。

**正向代理是代理客户端，反向代理代理的是服务器**

### 简单实践

配置两台服务器：

一台专门用来做业务逻辑的响应，设置端口 3000；一台专门用于处理图片资源响应，设置端口 3001

- 业务逻辑响应代码：

```js
// node-server.js
var http = require("http");
var server = http.createServer();

server.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("node----server");
  } else {
    res.end("404");
  }
});
```

- 图片资源响应代码

```js
// server-img.js
var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.listen(3001, () => {
  console.log("http://127.0.0.1:3001");
});

server.on("request", (req, res) => {
  fs.readFile("." + req.url, (err, data) => {
    if (err) {
      res.end("没有这个文件");
    } else {
      res.end(data);
    }
  });
});
```

启动上面两个服务后，对 nginx 配置文件的 server 项进行修改

```
location / {
    proxy_pass http://127.0.0.1:3000;
}
location ~ \.(jpg|png)$ {
    proxy_pass http://127.0.0.1:3001;
}
```

通过命令 nginx -s reload 重新加载配置文件，就可以访问不同的内容了，由 nginx 代理到不同的内部服务器，提供不同的资源响应。

我们修改代码，让响应内容集成，将 nginx 默认响应的 html 复制到自己的资源根目录中，由业务逻辑服务器进行处理加载。

```html
<h1>node----server</h1>
<img src="./img/h-lf.jpg" />
```

修改业务逻辑代码，加载 html 静态页面资源

```js
var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

server.on("request", (req, res) => {
  if ((req.url = "/")) {
    fs.readFile("./index.html", (err, data) => {
      res.end(data);
    });
  } else {
    res.end("error");
  }
});
```

## 服务器集群和负载均衡

内网服务器因为要处理大量的业务逻辑，因此，内网单台服务器的响应能力非常有限，为了提供更快加速的响应，一般会在内网架设多台业务逻辑处理器，当某一台正在工作时，需要由其他的正在闲置的服务器来处理请求响应；

后端多台相同的业务逻辑服务器，被称为服务器集群；而当请求到来时，到底由哪台服务器进行处理，取决于代理转向哪台服务器，这项能力，叫做负载均衡。

以图片处理为例，准备三个后端服务：

- server-img1.js 端口 3001
- server-img2.js 端口 3002
- server-img3.js 端口 3003

`kill 9 进程号` 杀死某个进程

修改配置文件：

```
upstream 自定义连接池名称 {
    server ip:port weight=权重值，越大占比越高 max_fails=最大失败次数 fail_timeout=超时时间
}

serevr {
    location ~ \.(jpg|png)${
        # 反向代理到负载连接池
        proxy_pass http://自定义连接池名称;
    }
}
```

所以实际的配置就是

```
# 写在server外面
upstream img_server{
    # weight=1 权重最低
    server 127.0.0.1:3001 weight=1;
    server 127.0.0.1:3002 weight=3;
    server 127.0.0.1:3003 weight=1;
}

server{
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
    location ~ \.(jpg|png)$ {
        # 反向代理到负载均衡池
        proxy_pass http://img_server;
    }
}
```

## 参考

- [Nginx 与前端开发](https://juejin.cn/post/6844903684967825421)
- [🚗 🚗 🚗 前端仔也需要懂的 nginx 内容](https://juejin.cn/post/7007346707767754765)
- [https://juejin.cn/post/6844904144235413512](https://juejin.cn/post/6844904144235413512)
- [前端不能不会的 Nginx 入门 （图文并茂的服务器环境教程）](https://juejin.cn/post/6844904020360986631)
