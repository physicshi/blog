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
