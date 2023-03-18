---
sidebar_position: 12
---

## redux

我们知道 redux 是一个同步的数据流方案，体现在：state 放映到 ui 上，当有一个 click event 发生， dispatch 会派发对应的 action，然后 reducer 收到 action，会改变 state，新的 state 又会反应到 ui 上。

### redux-thunk

相较于同步数据流，异步数据流存在异步请求的操作，等异步请求有了结果才会触发 action 进入 reducer，修改 store 中的 state

普通的 action 只能返回对象，使用 redux-thunk 后，action 不但可以返回普通对象，还可以返回一个带 dispatch 参数的函数，在该函数里进行异步请求，逻辑就是在 thunkAction 中， 返回一个函数，函数里面进行异步请求，异步请求有了结果后，再触发同步的 action，设置最新的 state

### redux-saga

> 基于 generator 的

可以看到 redux-thunk 会把异步操作杂糅在 action 里面，而 redux-saga 则是把异步操作抽离出来，作为 saga 文件，整体结构就是：

```js
// sagas/index.jsxxw
import { all } from "redux-saga";
import saga1 from "./saga1.js";
import saga2 from "./saga2.js";

// 每个saga文件都是一个 generator 函数，所以可以用 all 来合并多个 saga 函数，然后 yield all 来调用所有的 saga 函数
function* rootSaga() {
  yield all([saga1(), saga2()]);
}

export default rootSaga;
```

```js
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/index.js";

const sagaMiddleware = createSagaMiddleware();
// redux-devtools-extension 开发环境下的浏览器插件提供的
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
```

更多内容参考：https://juejin.cn/post/6975041237266989086

## i18n

国际化（Internationalization） 指的是同一个网站可以支持多种不同的语言， 以方便不同国家， 不同语种的用户访问。

关于国际化我们想到的最简单的方案就是为不同的国家创建不同的网站 ， 比如苹果公司，他的英文官网是 ：http://www.apple.com 而中国官网是 http://www.apple.com/cn

苹果公司这种方案并不适合全部公司， 我们希望相同的一个网站， 而不同人访问的时候可以根据用户所在的区域显示不同的语言文字， 而网站的布局样式等不发生改变。

于是就有了我们说的国际化， 国际化总的来说就是同一个网站不同国家的人来访问可以显示出不同的语言。 但实际上这种需求并不强烈， 一般真的有国际化需求的公司， 主流采用的依然是苹果公司的那种方案， 为不同的国家创建不同的页面。 所以国际化的内容我们了解一下即可。

国际化的英文 Internationalization， 但是由于拼写过长， 老外想了一个简单的写法叫做 I18N， 代表的是 Internationalization 这个单词， 以 I 开头， 以 N 结尾， 而中间是 18 个字母， 所以简写为 I18N。 以后我们说 I18N 和国际化是一个意思。

怎么去做国际化呢

组件翻译文案维护在本地的文件夹下，每个需要翻译的文案在代码中需要手动：`__(defaultstr,$key,{})`

## export import

`export` 导出通常有三种方式：

```js
// 1. export 直接导出一个声明
export const num = 1;
export class Person {}
export function setName() {}

// 2. 声明和导出分开
const num2 = 2;
function setAge() {}
class Man {}

export { num2, setAge, Man };

// 3. 导出别名
export { num2 as fnum, setAge as fsetAge, Man as fMan };
```

`import` 导入的三种方式：

```js
// 1. 普通导入
import { name, age, setName } from "./xx.js";

// 2. 别名
import { name as fname, age as fage, setName as fsetName } from "./xx.js";

// 3. 将导出的所有内容放到一个标识符中
import * as all from "./xx.js";
console.log(all.name, all.age, all.setName);
```

**导入和导出放到一起使用**

```js
// index.js
// 导出方式 1
import { add, sub } from "./math.js";
import { priceFormat, dateFormat } from "./format.js";

export { add, sub, priceFormat, dateFormat };

// 导出方式 2
export { add, sub } from "./math.js";
export { priceFormat, dateFormat } from "./format.js";

// 导出方式 3
export * from "./math.js";
export * from "./format.js";
```

对于**默认导出**

```js
export { age, name, foo as default };
export default foo
```

```js
// 导入导出结合，注意这种导出导入只是作为一个接口的中转，无法在文件中使用
export { age, name, default as foo2 } from "./main.js";

// 在另一个文件就可以
import { age, name, foo2 } from "./xxx.js";
```

- [export 与 import 的复合写法 ](https://es6.ruanyifeng.com/#docs/module#export-%E4%B8%8E-import-%E7%9A%84%E5%A4%8D%E5%90%88%E5%86%99%E6%B3%95)
