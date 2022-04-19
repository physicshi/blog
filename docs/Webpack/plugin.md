---
sidebar_position: 4
---

> 插件主要就是扩展了 webpack 的构建能力，可以用来控制最终生成的代码是如何进行组织和输出的，包括对代码的打包优化、压缩，甚至是启用模块热替换、重新定义环境中的变量，等等。

Webpack 在整个构建阶段提供了很多 hooks 来注册事件（挂载自定义 plugins），开发者可以更自由的去引入自己的行为。

## plugin 的基本结构

一个最基本的 plugin 需要包含两部分：

- 一个 JavaScript 类
- 一个 apply 方法，apply 方法在 webpack 装载这个插件的时候被调用，并且会传入 compiler 对象。

使用不同的 hooks 来指定自己需要发生的处理行为
在异步调用时最后需要调用 webpack 提供给我们的 callback 或者通过 Promise 的方式

```js
class MyPlugin{
  apply(compiler){
    compiler.hooks.<hookName>.tap(PluginName,(params)=>{
      /** do some thing */
    })
  }
}
module.exports = MyPlugin
```

## Compiler and Compilation

ompiler 和 Compilation 是整个编写插件的过程中的**重！中！之！重！**因为我们几乎所有的操作都会围绕他们。

compiler 对象可以理解为一个和 webpack 环境整体绑定的一个对象，它包含了所有的环境配置，包括 options，loader 和 plugin，当 webpack 启动时，这个对象会被实例化，并且他是全局唯一的，上面我们说到的 apply 方法传入的参数就是它。

compilation 在每次构建资源的过程中都会被创建出来，可以理解为本次打包的上下文，一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。它同样也提供了很多的 hook 。

Compiler 和 Compilation 提供了非常多的钩子供我们使用，这些方法的组合可以让我们在构建过程的不同时间获取不同的内容，见[官网](https://webpack.docschina.org/api/compiler-hooks/)。

上面的链接中我们会发现钩子会有不同的类型，比如 SyncHook、SyncBailHook、AsyncParallelHook、AsyncSeriesHook ，这些不同的钩子类型都是由 tapable 提供给我们的。

```js
compiler/compilation.hooks.<hookName>.tap/tapAsync/tapPromise("pluginName",(xxx)=>{/**dosth*/})
```

## 同步和异步

plugin 的 hooks 是有同步和异步区分的，在同步的情况下，我们使用 `<hookName>.tap` 的方式进行调用，而在异步 hook 内我们可以进行一些异步操作，并且有异步操作的情况下，请使用 tapAsync 或者 tapPromise 方法来告知 webpack 这里的内容是异步的，当然，如果内部没有异步操作的话，你也可以正常使用 tap 。

### tapAsync

使用 tapAsync 的时候，我们需要多传入一个 callback 回调，并且在结束的时候一定要调用这个回调告知 webpack 这段异步操作结束了。
比如：

```js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("MyPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("async");
        callback();
      }, 1000);
    });
  }
}
module.exports = MyPlugin;
```

### tapPromise

当使用 tapPromise 来处理异步的时候，我们需要返回一个 Promise 对象并且让它在结束的时候 resolve

```js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapPromise("MyPlugin", (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("async");
          resolve();
        }, 1000);
      });
    });
  }
}
module.exports = MyPlugin;
```

## 自定义 plugin

目的是去除 Webpack 打包结果中的注释。

通过 compiler 对象的 hooks 属性访问到 emit 钩子，再通过 **tap 方法**注册一个钩子函数，这个方法接收两个参数：

- 第一个是插件的名称，我们这里的插件名称是 RemoveCommentsPlugin；

- 第二个是要挂载到这个钩子上的函数（我们要写的逻辑）；

> `compilation.assets[name].source()` 输出文件内容
>
> 通过正则替换的方式移除掉代码中的注释，最后覆盖掉 compilation.assets 中对应的对象，在覆盖的对象中，我们同样暴露一个 source 方法用来返回新的内容。另外还需要再暴露一个 size 方法，用来返回内容大小，这是 Webpack 内部要求的格式

```js
// ./remove-comments-plugin.js
class RemoveCommentsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("RemoveCommentsPlugin", (compilation) => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.log(name) 输出文件名
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, "");
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}
```
