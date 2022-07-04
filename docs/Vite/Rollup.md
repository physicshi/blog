---
sidebar_position: 3
---

Rollup 是一款基于 ES Module 模块规范实现的 JavaScript 打包工具，在 Vite 中，不仅作为生产环境下的打包工具，其插件机制也被 Vite 所兼容。

基本使用已经在 [概览](./%E6%A6%82%E8%A7%88.md#rollup) 中介绍，这一节主要是 Rollup 插件机制。

:::tip
rollup 的插件本质是一个函数，返回一个对象。返回的对象包含一些属性(如 name)，和不同阶段的钩子函数（构建 build 和输出 output 阶段），以实现插件内部的功能
:::

对于一次完整的构建过程而言， Rollup 会先进入到 **Build 阶段**，解析各模块的内容及依赖关系，然后进入 **Output 阶段**，完成打包及输出的过程。

而插件的各种 hooks 也根据这两大构建阶段（Build 和 Output），分为两类: Build Hook 与 Output Hook

以调用时机来划分钩子函数以外，我们还可以以钩子函数处理方式来划分，这样来看钩子函数就主要有以下四种版本：

- async: 处理 promise 的异步钩子，即这类 hook 可以返回一个解析为相同类型值的 promise，同步版本 hook 将被标记为 sync
- first: 如果多个插件实现了相同的钩子函数，那么会串式执行，从头到尾，但是，如果其中某个的返回值不是 null 也不是 undefined 的话，会直接终止掉后续插件
- sequential: 如果多个插件实现了相同的钩子函数，那么会串式执行，按照使用插件的顺序从头到尾执行，如果是异步的，会等待之前处理完毕，在执行下一个插件
- parallel: 同上，不过如果某个插件是异步的，其后的插件不会等待，而是并行执行，这个也就是我们在 rollup.rollup() 阶段看到的处理方式

## Hooks

详细文档看这个：https://rollupjs.org/guide/en/#build-hooks

hooks 分为 build 阶段的 hooks 和 output 阶段的 hooks：

- Build Hook 即在 Build 阶段执行的钩子函数，在这个阶段主要进行模块代码的转换、AST 解析以及模块依赖的解析，那么这个阶段的 Hook 对于代码的操作粒度一般为模块级别，也就是单文件级别
- Ouput Hook(官方称为 Output Generation Hook)，则主要进行代码的打包，对于代码而言，操作粒度一般为 chunk 级别(一个 chunk 通常指很多文件打包到一起的产物)

可以参考这篇文章：https://juejin.cn/post/7023934469568462878

## Rollup 插件机制

rollup 的插件是一个普通的函数，函数返回一个对象，该对象包含一些属性(如 name)，和不同阶段的钩子函数（构建 build 和输出 output 阶段）

或者说开发 Rollup 插件就是在编写一个个 Hook 函数，你可以理解为一个 Rollup 插件基本就是各种 Hook 函数的组合

:::tip 约定

- 插件应该有一个带有 `rollup-plugin-` 前缀的明确名称。
- 在 package.json 中包含 rollup-plugin 关键字。
- 插件应该支持测试，推荐 mocha 或者 ava 这类开箱支持 promises 的库。
- 尽可能使用异步方法。
- 用英语记录你的插件。
- 确保你的插件输出正确的  sourcemap。
- 如果你的插件使用 'virtual modules'（比如帮助函数），给模块名加上  \0  前缀。这可以阻止其他插件执行它。

:::

举例：

```js
// 官网的一个例子
export default function myExample () {
  return {
    name: 'my-example', // 名字用来展示在警告和报错中
    // 路径解析: resolveId
    resolveId ( source ) {
      if (source === 'virtual-module') {
        return source; // rollup 不应该查询其他插件或文件系统
      }
      return null; // other ids 正常处理
    },
    // 通过 resolveId 解析后的路径来加载模块内容
    load ( id ) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // source code for "virtual-module"
      }
      return null; // other ids
    }
  };
}

// rollup.config.js
import myExample from './rollup-plugin-my-example.js';
export default ({
  input: 'virtual-module', // 配置 virtual-module 作为入口文件满足条件通过上述插件处理
  plugins: [myExample()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});
```
