---
sidebar_position: 2
---

首先 hook 是 react 16.8 的新增特性，我们先说一下类组件的痛点：

- 逻辑复用困难
  - HOC 组件树嵌套会很深 [Function 组件(Hooks) vs Class 组件](https://segmentfault.com/a/1190000023962500)
- 类组件中的 this 增加理解成本
  - 关于这个 this 的问题，有一篇文章[React 函数组件和类组件的差异](https://juejin.cn/post/6844903825220829198)

当然我觉得最好的方式是写一个 react demo，然后打断点在浏览器里看发生了什么。

## hooks 的核心

所有函数组件的触发是在 renderWithHooks 方法中，renderWithHooks 里面有个 workInProgress 的对象就是当前的 fiber 节点：

![image](https://tvax1.sinaimg.cn/large/006T9etDly1h0k5i0r786j30nu0jwgug.jpg)

workInProgress 的 memoizedstate 存着 hooks 的链表信息（其实就是放着第一个链表），

![image](https://tva3.sinaimg.cn/mw690/006T9etDly1h0k8fae5r1j30ne072diz.jpg)

链表有一个 next 属性，挂着下一个链表：

![image](https://tva3.sinaimg.cn/mw690/006T9etDly1h0k8cpj5vyj30me0wgn67.jpg)

函数组件 fiber ，updateQueue 存放每个 useEffect/useLayoutEffect 产生的副作用组成的链表。在 commit 阶段更新这些副作用：

![image](https://tva2.sinaimg.cn/large/006T9etDly1h0k5b8bv7pj30n008g76x.jpg)

mountXxx 是创建 memorizedState 链表的过程，每个 useXxx 的 hooks 都有 mountXxx 和 updateXxx 两个阶段，核心就是 mountWorkInProgressHook 和 updateWorkInProgressHook，创建对应的 memorizedState 对象，然后用 next 串联起来：

```js
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };

  if (workInProgressHook === null) {
    // This is the first hook in the list
    currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
  } else {
    // Append to the end of the list
    workInProgressHook = workInProgressHook.next = hook;
  }

  return workInProgressHook;
}

// updateWorkInProgressHook 逻辑太多这里略去
```

### useCallback

以 useCallback 为例：

useCallback 在 memorizedState 上放了一个数组，第一个元素是传入的回调函数，第二个是传入的 deps（对 deps 做了下 undefined 的处理）。

更新的时候把之前的那个 memorizedState 取出来（prevDeps），和新传入的 deps 做下对比，如果没变，那就返回之前的回调函数，也就是 prevState[0]。

如果变了，那就创建一个新的数组，第一个元素是传入的回调函数，第二个是传入的 deps。

所以，useCallback 的功能也就呼之欲出了：useCallback 可以实现函数的缓存，如果 deps 没变就不会创建新的，否则才会返回新传入的函数。

```js
function mountCallback(callback, deps) {
  var hook = mountWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;
  hook.memoizedState = [callback, nextDeps];
  return callback;
}

function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;
  var prevState = hook.memoizedState;

  if (prevState !== null) {
    if (nextDeps !== null) {
      var prevDeps = prevState[1];

      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }

  hook.memoizedState = [callback, nextDeps];
  return callback;
}
```

#### Object.is

这里要提一下判断两个`deps`是否相等`areHookInputsEqual`，本质上是`ployfill`的`object.is`。

不过`===`有个问题：

```js
+0 === -0; //true
NaN === NaN; // false
```

所以：

```js
Object.defineProperty(Object, "is", {
  value: function (x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      // 期望的是 +0 不等于 -0 ， +0 -0 false；1/0 = Infinity
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    // 期望的是 NaN等于NaN NaN NaN true
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true,
});
```

这是`react`官方的`polyfill`：

```js
// react/packages/shared/objectIs.js
function is(x, y) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}

var objectIs = typeof Object.is === "function" ? Object.is : is;
```

```js
function areHookInputsEqual(nextDeps, prevDeps) {
  // ...

  if (nextDeps.length !== prevDeps.length) {
    error(
      "The final argument passed to %s changed size between renders. The " +
        "order and size of this array must remain constant.\n\n" +
        "Previous: %s\n" +
        "Incoming: %s",
      currentHookNameInDev,
      "[" + prevDeps.join(", ") + "]",
      "[" + nextDeps.join(", ") + "]"
    );
  }
  // 对比依赖的每一项
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}
```

## hooks 闭包

React 的闭包问题

先来看一个例子：

```js
import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("setInterval:", count);
    }, 1000);
  }, []);

  return (
    <div>
      count: {count}
      <br />
      <button onClick={() => setCount((val) => val + 1)}>增加 1</button>
    </div>
  );
};
```

当我点击按钮的时候，发现 setInterval 中打印出来的值并没有发生变化，始终都是 0。这就是 React 的闭包问题。

### 产生的原因

为了维护 Function Component 的 state，React 用链表的方式来存储 Function Component 里面的 hooks，并为每一个 hooks 创建了一个对象。

```js
type Hook = {
  memoizedState: any,
  baseState: any,
  baseUpdate: Update<any, any> | null,
  queue: UpdateQueue<any, any> | null,
  next: Hook | null,
};
```

这个对象的 memoizedState 属性就是用来存储组件上一次更新后的 state，next 指向下一个 hook 对象。在组件更新的过程中，hooks 函数执行的顺序是不变的，就可以根据这个链表拿到当前 hooks 对应的 Hook 对象，函数式组件就是这样拥有了 state 的能力。

同时制定了一系列的规则，比如不能将 hooks 写入到 if...else... 中。从而保证能够正确拿到相应 hook 的 state。

useEffect 接收了两个参数，一个回调函数和一个数组。数组里面就是 useEffect 的依赖，当为 [] 的时候，回调函数只会在组件第一次渲染后（DOM 结构渲染完）的时候执行一次。如果有依赖其他项，react 会判断其依赖是否改变，如果改变了就会执行回调函数。

回到刚刚那个例子:

```js
const [count, setCount] = useState(0);

useEffect(() => {
  setInterval(() => {
    console.log("setInterval:", count);
  }, 1000);
}, []);
```

它第一次执行的时候，执行 useState，count 为 0。执行 useEffect，执行其回调中的逻辑，启动定时器，每隔 1s 输出 setInterval: 0。

当我点击按钮使 count 增加 1 的时候，整个函数式组件重新渲染，这个时候前一个执行的链表已经存在了。useState 将 Hook 对象 上保存的状态置为 1， 那么此时 count 也为 1 了。执行 useEffect，其依赖项为空，不执行回调函数。但是之前的回调函数还是在的，它还是会每隔 1s 执行 console.log("setInterval:", count);，但这里的 count 是之前第一次执行时候的 count 值，因为在定时器的回调函数里面被引用了，形成了闭包一直被保存。

### 解决的方法

解决方法一：给 useEffect 设置依赖项，重新执行函数，设置新的定时器，拿到最新值。

```js
// 解决方法一
useEffect(() => {
  if (timer.current) {
    clearInterval(timer.current);
  }
  timer.current = setInterval(() => {
    console.log("setInterval:", count);
  }, 1000);
}, [count]);
```

解决方法二：使用 useRef。useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
useRef 创建的是一个普通 Javascript 对象，而且会在每次渲染时返回同一个 ref 对象，当我们变化它的 current 属性的时候，对象的引用都是同一个，所以定时器中能够读到最新的值。

```js
const lastCount = useRef(count);

// 解决方法二
useEffect(() => {
  setInterval(() => {
    console.log("setInterval:", lastCount.current);
  }, 1000);
}, []);

return (
  <div>
    count: {count}
    <br />
    <button
      onClick={() => {
        setCount((val) => val + 1);
        // +1
        lastCount.current += 1;
      }}
    >
      增加 1
    </button>
  </div>
);
```

:::tip
setState 可以函数式更新 `val => val + 1`，保证每次拿到的 val 参数是最新的值
:::

### 总结

- 在 useEffect 依赖 deps 数组里加入引用的依赖 count
- 利用 useRef

:::tip
产生闭包陷阱的原因是，React 对于每一个函数式组件都会以链表的方式去维护 hooks，并为每一个 hook 创建一个 Hook 对象，这个对象的 memoizedState 属性就是用来存储组件上一次更新后的 state，next 指向下一个 hook 对象。

初始化，即第一次执行的时候，执行 useState，count 为 0。执行 useEffect，执行其回调中的逻辑，启动定时器，seState 将 Hook 对象 上保存的状态置为 1；执行第二个 useEffect，执行其回调中的逻辑，启动定时器，每隔 0.5s 输出 0。

第二次执行的时候，执行 useEffect，其依赖项为空，不执行回调函数，但是之前的回调函数还是在的，**注意这里的 count 是之前第一次执行时候的 count 值 (0)，因为在在初始化的时候就被定时器的回调函数里面引用了，形成了闭包一直被保存。**对于第一个回调函数，就是将 Hook 对象 上保存的状态置为 1，对于第二个回调函数，就是不断的输出 0
:::

原始的例子：

```ts
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 500);
  }, []);
  // useEffect 没有第二个参数时，组件的初始化和更新都会执行
  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 500);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
```

打印的并不是预期的 0、1、2、3，而是 0、0、0、0

![image](https://tva1.sinaimg.cn/large/008cOUgNgy1h3w0jfqjy3j30ee0dgwhq.jpg)

#### 方案一

闭包陷阱产生的原因就是 useEffect 等 hook 里用到了某个 state，但是没有加到 deps 数组里，这样导致 state 变了却没有执行新传入的函数，依然引用的之前的 state。

闭包陷阱的解决也很简单，正确设置 deps 数组就可以了，这样每次用到的 state 变了就会执行新函数，引用新的 state。不过还要注意要清理下上次的定时器、事件监听器等。

```ts
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 500);
    // return 执行当前 effect 之前对上一个 effect 进行清除
    // 加上了 clearInterval，每次执行新的函数之前会把上次设置的定时器清掉。
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 500);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
```

![image](https://tvax4.sinaimg.cn/large/008cOUgNgy1h3w0kypi7aj30dq0i8dj6.jpg)

#### 方案二

既然闭包陷阱产生的原因就是 useEffect 的函数里引用了某个 state，形成了闭包，所以可以不直接引用 state，而是使用 useRef 创建一个新的 ref 对象，然后把 state 的值赋给 ref 对象的 current 属性，每次拿到最新的。

useRef 是在 memorizedState 链表中放一个对象，current 保存某个值。

```js
const fn = () => {
  console.log(count);
};
// 返回⼀个可变的 ref 对象，该对象只有个 current 属性，初始值为传⼊的参数( initialValue )
const ref = useRef(fn);

useLayoutEffect(() => {
  ref.current = fn;
});

useEffect(() => {
  setInterval(() => ref.current(), 500);
}, []);
```

useEffect 里执行定时器，deps 设置为了 []，所以只会执行一次，回调函数用的是 ref.current，没有直接依赖某个 state，所以不会有闭包陷阱。
用 useRef 创建个 ref 对象，初始值为打印 count 的回调函数，每次 render 都修改下其中的函数为新创建的函数，这个函数里引用的 count 就是最新的。

这里用了 useLayoutEffect 而不是 useEffect 是因为 useLayoutEffect 是在 render 后同步执行的，useEffect 是在 render 后异步执行的，所以用 useLayoutEffect 能保证在 useEffect 之前被调用。

这种方式避免了 useEffect 里直接对 state 的引用，从而避免了闭包问题。

另外，修改 count 的地方，可以用 `setCount(count => count + 1)` 代替 `setCount(count + 1)` （函数式更新的 count 每次能拿到最新的 count），这样也就避免了闭包问题（不然就要在 deps 里加入 count 依赖）：

```js
useEffect(() => {
  setInterval(() => {
    setCount((count) => count + 1);
  }, 500);
}, []);
```

现在组件的代码是这样的：

```js
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState < number > 0;

  const fn = () => {
    console.log(count);
  };
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  useEffect(() => {
    setInterval(() => ref.current(), 500);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
```
