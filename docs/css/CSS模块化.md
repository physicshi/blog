---
sidebar_position: 4
---

:::tip
要清楚 CSS Modules 并不是 CSS 官方的标准，也不是浏览器的特性，而是使用一些构建工具，比如 webpack，对 CSS 类名和选择器限定作用域的一种方式（类似命名空间）
:::

首先 CSS 的规则都是全局的，即任何一个组件的样式规则，都对整个页面有效（这样会造成样式污染，）。另外一个特点是后面的样式可以覆盖前面的。

而 CSS Modules 就是解决全局生效的特点，加入了局部作用域和模块依赖，可以做到每个文件的样式隔离。

> 产生局部作用域的唯一方法，就是使用一个**独一无二的 class 的名字**，不会与其他选择器重名。这就是 CSS Modules 的做法。
> React 的 CSS Modules，在 CSS 文件加一个后缀 `.module`，然后当做一个变量引入到 JS 文件中。

```jsx
// 注意在 index.js 中引入 import "antd/dist/antd.css";
// src/App.js
import style from "./styles.module.css";

export default function App() {
  return (
    <div className={style.App}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

上面代码中，我们将样式文件 `styles.module.css` 输入到 `style` 对象，然后引用 `style.title` 代表一个 `class`。

```css
/* styles.module.css */
.App {
  font-family: sans-serif;
  text-align: center;
}
```

编译后，插入的样式表和元素的 class 属性（`style.App`）会被构建工具编译成一个哈希字符串作为命名空间。

```html
<div class="_src_styles_module__App">
  <h1>Hello CodeSandbox</h1>
  <h2>Start editing to see some magic happen!</h2>
</div>
```

`App.css` 也会同时被编译。

```css
._src_styles_module__App {
  font-family: sans-serif;
  text-align: center;
}
```

这样一来，这个类名就变成独一无二了，只对 App 组件有效。

:::tip
这个命名规则是可以通过 CSS-loader 进行配置，类似如下的配置：

```js
module: {
  loaders: [
    // ...
    {
      test: /\.css$/,
      loader:
        "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]",
    },
  ];
}
```

:::

> 覆盖组件库的样式，就是定位要覆盖的样式，然后只要重写同名的样式，理论上就能实现覆盖

对于覆盖组件库样式的场景，在 CSS Modules 下，会发现原本用作覆盖的 CSS 也被加上了哈希值（这样就没办法覆盖样式了）：

![image](https://tva2.sinaimg.cn/large/008cOUgNly1h388qgrsvcj31io0bcn59.jpg)

React 给我们提供了一个语法`:global`。它生效范围内的样式会被当作全局 CSS。

具体在 CSS 文件中，使用 `:global` 包裹希望全局生效的样式：

![image](https://tvax4.sinaimg.cn/large/008cOUgNly1h388x855ohj31qi0e8kd8.jpg)

借助 `:global` 语法，即使使用 CSS Module 进行样式隔离也可以实现覆盖功能。
