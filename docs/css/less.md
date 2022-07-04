---
sidebar_position: 3
---

Less 是一种 CSS 扩展语言，也被称为 CSS 预处理器，我们可以将编写的 less 文件编译后输出为 CSS 文件，这就是预处理器的含义。

Less 在 CSS 的基础上提供了许多扩展功能，比如变量、函数、混合和操作符等，这些功能可以帮助编写动态 CSS。

:::tip
Less 开始是用 Ruby 编写的，但后来的版本改为 Javascript 编写，并且不推荐使用 Ruby。Less 最初由 Alexis Sellier 于 2009 年开发。

:::

## 初体验

首先新建一个项目：

```shell
pnpm init -y
pnpm i -D less
```

验证编译器版本：

```
npx lessc -v
```

![image](https://tva3.sinaimg.cn/mw690/008cOUgNly1h36jck7kbkj30rk01wtao.jpg)

```less
// index.less
@primarycolor: #ff7f50;
@color: #800080;

h2 {
  color: @primarycolor;
}

h3 {
  color: @color;
}
```

使用 less 编译器编译 less 文件，输出 `index.css`：

```shell
npx lessc index.less index.css
```

```css
/* index.css  */
h2 {
  color: #ff7f50;
}
h3 {
  color: #800080;
}
```

## 变量

在 Less 中可以使用变量来避免重复值的使用

变量使用 `@` 符号定义，使用冒号 `:` 赋值。变量定义好后就可以在各处使用。

格式：`@xxx: yyyyy`

```less
@color1: #ca428b;

.div1 {
  background-color: @color1;
}

.div2 {
  background-color: @color1;
}
```

### 变量插值

变量除了可以作为属性值（格式是 `@xxx`），还可以作为选择器名称、属性名称、url 和 `@import` 语句。

不过在这些地方中引用变量，要注意变量名必须放在以 `@` 符号为前缀的大括号 `{}` 中，格式 `@{xxx}` ：

1. 作为选择器

```less
@selector: h2;

@{selector} {
  background: #2eccfa;
}
```

2. 作为 url

```less
@images: "https://www.baidu.com";

.myclass {
  background: url("@{images}/baidu.jpg");
  width: 800px;
  height: 500px;
}
```

3.  `@import` 语句中使用变量

```less
@path: "https://www.baidu.com";
@import "@{path}/index.css";

.myclass {
  color: #a52a2a;
}
```

4. 属性名中使用变量

```less
@my-property: color;
.myclass {
  background-@{my-property}: #81f7d8;
}
```

5. 变量名中引用变量

```less
.myclass {
  @col: #ca428b;
  @color: "col";
  background-color: @@color;
}
```

编译后：

```css
.myclass {
  background-color: #ca428b;
}
```

6. 覆盖变量值

多次定义变量值，后面的会覆盖前面的，本地的会覆盖上一级范围的。

```less
@color: #800080;

@color: #ddd;

h3 {
  color: @color;
}
```

编译后 css 输出：

```css
h3 {
  color: #ddd;
}
```

7. 变量作用域

变量作用域指定变量可访问的范围。编译时，编译器先从本地范围查找变量定义，如果没找到，编译器将到上一级范围查找，以此类推。

通常一个大括号内定义的变量是局部变量，作用域局限于大括号内。

```less
@var: @a;
@a: 15px;

.myclass {
  font-size: @var;
  @a: 20px;
  color: green;
}
```

编译后 css 输出：

```css
.myclass {
  font-size: 20px;
  color: green;
}
```

## 嵌套

:::tip
对于父子层级的选择器来说，可以利用嵌套使代码更具层次结构，代码更清晰
:::

> `&` 代表上一层选择器的名字

```css
p {
  color: #232323;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
}
p .intro {
  font-variant: small-caps;
  font-size: 16px;
  line-height: 24px;
}
p::after {
  content: "";
  display: block;
  clear: both;
}
p .highlight {
  color: #00214d;
  font-weight: bold;
}
```

```less
@textColor: #232323;
@textHighlight: #00214d;
@fontFamily: Helvetica, Arial, sans-serif;
@fontSize: 14px;
@lineHeight: 21px;

@introSize: 16px;
@introLineHeight: 24px;
@introFontVariant: small-caps;

p {
  color: @textColor;
  font-family: @fontFamily;
  font-size: @fontSize;
  line-height: @lineHeight;

  .intro {
    font-variant: @introFontVariant;
    font-size: @introSize;
    line-height: @introLineHeight;
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .highlight {
    color: @textHighlight;
    font-weight: bold;
  }
}
```

`&`的另一个典型用法是生成部分重复的类名:

less 代码：

```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &-custom {
    background-image: url("custom.png");
  }
}
```

css 输出：

```css
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button-custom {
  background-image: url("custom.png");
}
```

### 多重 `&`

`&` 可能在选择器中出现多次。这使得重复引用父选择器而不重复其名称成为可能。

less 代码：

```less
.link {
  & + & {
    color: red;
  }

  & & {
    color: green;
  }

  && {
    color: blue;
  }

  &,
  &ish {
    color: cyan;
  }
}
```

css 输出：

```css
.link + .link {
  color: red;
}
.link .link {
  color: green;
}
.link.link {
  color: blue;
}
.link,
.linkish {
  color: cyan;
}
```

注意 `&` 表示所有父选择器(不只是最近的祖先)，所以下面的例子:

less 代码：

```less
.grand {
  .parent {
    & > & {
      color: red;
    }

    & & {
      color: green;
    }

    && {
      color: blue;
    }

    &,
    &ish {
      color: cyan;
    }
  }
}
```

css 输出：

```css
.grand .parent > .grand .parent {
  color: red;
}
.grand .parent .grand .parent {
  color: green;
}
.grand .parent.grand .parent {
  color: blue;
}
.grand .parent,
.grand .parentish {
  color: cyan;
}
```

## Mixin

Mixin 是一组共用的 CSS 属性，类似编程语言中的函数，选择器通过调用 Mixin，把 Mixin 中的属性包含进来。

Less 代码：

```less
.round-borders {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
#menu {
  color: gray;
  .round-borders; // 调用mixin: round-borders
}
```

编译后的 css 输出：

```css
.round-borders {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
#menu {
  color: gray;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
```

:::caution
调用 mixin 时，括号是可选的。调用 `.round-borders()` 与调用 `.round-borders` 效果相同。
:::

### 不输出 Mixin 本身

Mixin 定义带括号，可以让 mixin 定义本身不输出。

Less 代码：

```less
.a() {
  // 定义带了括号
  padding-left: 100px;
}

.myclass {
  background: #64d9c0;
  .a;
}
```

编译后的 css 输出：

```css
/* 没有输出 mixin .a() 的内容  */
.myclass {
  background: #64d9c0;
  padding-left: 100px;
}
```

### Mixin 中的选择器

mixin 不仅可以包含属性，还可以包含选择器。

Less 代码：

```less
.mixin() {
  &:hover {
    background: #ffc0cb;
  }
}

a {
  .mixin();
}
```

> 调用 mixin 时，括号是可选的。在上面的例子中，调用.mixin()与调用.mixin 效果相同。

编译后的 css 输出：

```css
a:hover {
  background: #ffc0cb;
}
```

### 命名空间

命名空间可以将 mixin 组合到一个公共名称下，这样可避免 mixin 之间名字冲突。

Less 代码：

```less
#outer() {
  background: yellow;
  .inner {
    color: red;
  }
}

p {
  #outer > .inner;
}
```

编译后的 css 输出：

```css
p {
  color: red;
}
```

### 受保护的命名空间

当保护应用于命名空间时，只有在保护条件返回 true 时才使用命名空间定义的 mixin。命名空间保护类似于 mixin 的保护。

Less 代码：

```less
@import "https://www.baidu.com/less/lib.less";
#namespace when (@color = blue) {
  .mixin() {
    color: red;
  }
}

p {
  #namespace .mixin();
}
```

lib.less

```less
@color: blue;
```

编译后的 css 输出：

```css
p {
  color: red;
}
```

### `!important` 关键字

`important` 关键字用于覆盖特定的属性。当它被放置在 mixin 调用之后，它将所有继承的属性都标记为 `!important`

Less 代码：

```less
.mixin() {
  color: #900;
  background: #f7be81;
}

.para1 {
  .mixin();
}

.para2 {
  .mixin() !important;
}
```

编译后的 css 输出：

```css
.para1 {
  color: #900;
  background: #f7be81;
}

.para2 {
  color: #900 !important;
  background: #f7be81 !important;
}
```

## import

在 Less 中，可以使用 `@import` 语句导入外部 Less 文件或 CSS 文件的内容。

假设我们有一个 less 文件：myfile.less

```less
.myclass {
  color: blue;
}
.myclass1 {
  color: red;
}
```

我们在另外一个名为 simple.less 的文件中导入上面的 myfile.less：

```less
@import "myfile.less";
.myclass2 {
  color: brown;
}
```

编译后输出 CSS：

```css
.myclass {
  color: blue;
}
.myclass1 {
  color: red;
}
.myclass2 {
  color: brown;
}
```

### Import 参数

`import` 语句可以指定一些参数，如下所示：

- reference: 只把导入的文件作为引用，不输出到 CSS 内容里。
- inline: 不处理直接将 CSS 复制到输出中。
- less: 不管文件扩展名是什么，都视为常规的 less 文件。
- css: 不管文件扩展名是什么，都视为常规的 css 文件。
- once: 只导入文件一次。
- multiple: 多次导入文件。
- optional: 如导入文件不存在，不会报错，继续编译。

注意: 你可以在 `@import` 语句中使用多个参数，用逗号分隔。

示例：

```less
@import (css, optional) "simple.less";
```
