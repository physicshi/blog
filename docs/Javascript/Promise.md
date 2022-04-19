---
sidebar_position: 7
---

Promise 是一种异步问题同步化解决方案，利用`.then`的方式，获取异步程序的结果，而不阻塞和 Promsie 无关的程序的执行，也就是说和其他与该 Promise 无关的程序保持异步关系。

回调地狱看起来只是顺带解决的，但是这不是最优的解决回调地狱的手段，因为不断的用链式操作抽离逻辑也不舒服，理想的是 async/await

## 远古时期

以前要想进行网络请求，因为是异步的关系，所以没办法直接利用返回值拿到请求结果（会得到 undefined），需要用回调函数拿到请求返回的结果。

```js
// request.js
function requestData(url, successCallback, failureCallback) {
  // 这边是利用ajax进行网络请求
  // ...
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status) {
      successCallback(this.response);
    }
  };
  // ...
}

// main.js
requestData(
  "/",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
```

## 基本概念

Promise 是一个类，就是承诺、许诺 、期约的意思，就是说 **Promise 会给调用者一个承诺：后面在回调数据的时候，可以创建一个 Promise 对象。**

- 通过 new 创建 Promise 对象，我们需要传入一个回调函数，我们称之为 executor 执行器
- 这个回调函数会被立即执行，并且需要另外两个回调函数 resolve、reject；
  - 调用 resolve 回调函数时，Promise 对象的 then 方法传入的回调函数会被执行；
  - 调用 reject 回调函数时，Promise 对象的 catch 方法传入的回调函数会被执行；

Promise 使用过程，可以将它划分成三个状态：

- 待定（pending）：执行 executor 中的代码
- 已兑现（fulfilled）：执行了 resolve（resolve 传入的值本身不是一个 Promise）
- 已拒绝（rejected）：执行了 reject

:::tip
状态一旦确定就是不可更改的（注意是执行了 resolve 后还是会执行 reject，但是无法改变 Promise 状态）

- 待定(pending): 初始状态，既没有被兑现，也没有被拒绝；
- 已兑现(fulfilled): 意味着操作成功完成；
- 已拒绝(rejected): 意味着操作失败；

:::

## Promise 实例方法

### resolve 参数

- 如果 resolve 传入一个普通的值或者对象，那么这个值会作为 then 回调的参数 res
- 如果 resolve 中传入的是另外一个 Promise，那么这个新 Promise 会决定原 Promise 的状态，相当于状态进行了移交（参数传递）
- 传入一个对象，这个对象有 then 方法，那么会执行该 then 方法，并且根据 then 方法的结果来决定 Promise 的状态

```js
// 传入一个普通值或者对象

new Promise((resolve, reject) => {
  resolve("normal resolve");
}).then((res) => {
  console.log("res:", res); // res normal resolve
});

// 传入另一个promise
new Promise((resolve, reject) => {
  resolve(
    new Promise((resolve, reject) => {
      resolve("第二个Promise的resolve");
    })
  );
}).then(
  (res) => {
    console.log("res", res); // res 第二个Promise的resolve
  },
  (err) => {
    console.log("err", err);
  }
);

// 传入一个实现了 then 方法的对象 (thenable 接口)
new Promise((resolve, reject) => {
  const obj = {
    // resolve reject会被传进来
    then: function (resolve, reject) {
      resolve("resolve message");
    },
  };
  resolve(obj);
}).then(
  (res) => {
    console.log("res", res); // res resolve message
  },
  (err) => {
    console.log("err", err);
  }
);
```

### then 方法

then 方法是 Promise 对象上的一个方法：它其实是放在 Promise 的原型上的 Promise.prototype.then

```js
class Promsie {
    // 对象方法
    // const promise = new Promise(); promise.then() 调用
    then (){

    }
    // 类方法
    // Promise.all()调用
    staic all(){

    }
}
```

then 方法接受两个参数:

- fulfilled 的回调函数：当状态变成 fulfilled 时会回调的函数（执行了 resolve 后）;
- reject 的回调函数：当状态变成 rejected 时会回调的函数（执行了 reject 后）;

:::tip
Promise 的对象方法：`console.log(Object.getOwnPropertyNames(Promise.prototype))`会输出`['constructor', 'then', 'catch', 'finally']`
:::

#### 多次调用 then 方法

一个 Promise 的 then 方法可以被多次调用：

- 每次调用我们都可以传入对应的 fulfilled 回调；
- 当 Promise 的状态变成 fulfilled 的时候，这些回调函数都会被执行；

```js
promise.then((res) => {
  console.log("res1:", res);
});

promise.then((res) => {
  console.log("res2:", res);
});

promise.then((res) => {
  console.log("res3:", res);
});
```

#### then 方法的返回值

then 方法传入的回调函数可以有返回值，实际上 then 方法本身就有返回值，返回值是一个 promise，该**返回值实际上会作为返回的 Promise 的 resolve 参数**：

- 如果返回的是一个普通值（数字/字符串/普通对象/undefined），那个这个普通值会被作为新的 promise 的 resolve 值（用 resolve 进行包裹）

```js
const promise = new Promise((resolve, reject) => {
  resolve("111");
});

promise.then((res) => {
  // 如果这里没有返回值，相当于 return undefined，reresolve(undefined)，这时候链式调用的res就是undefinedes
  return "aaa"; // 这里相当于 return new Promise((resolve,reject)=>{resolve("aaa")})
});

// 链式调用
promise
  .then((res) => {
    return "aaaa";
  })
  .then((res) => {
    console.log("res", res); // res aaaa
    return "bbbb";
  })
  .then((res) => {
    console.log("res", res); // res bbbb
  });
```

- 返回一个 promise，这个 promise 同样会作为新的 promise 的 resolve 值，也就是相当于 resolve(new Promise(()=>{}))，会进行状态移交，作为 resolve 参数传入的 promise 决定最终的 promise 值

```js
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1111);
      }, 3000);
    });
  })
  .then((res) => {
    console.log("res", res); // 三秒后打印 res 1111
  });
```

- 返回的是一个对象，并且该对象实现了 thenable

```js
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve(2222);
      },
    };
  })
  .then((res) => {
    console.log("res:", res); // res 2222
  });

// 这里就相当于
promise
  .then((res) => {
    return new Promsie((resolve, reject) => {
      resolve(obj.then(resolve, reject));
    });
  })
  .then((res) => {
    console.log("res:", res);
  });
```

### catch 方法

catch 方法同 then 方法一样，也是 Promise 对象上的一个方法，也是放在 Promise 的原型上的 Promise.prototype.catch：

一个 Promise 的 catch 方法是可以被多次调用的：

- 每次调用我们都可以传入对应的 reject 回调；
- 当 Promise 的状态变成 reject 的时候，这些回调函数都会被执行；

catch 方法也是会返回一个 Promise 对象的，所以 catch 方法后面我们可以继续调用 then 方法或者 catch 方法。

```js
const promise = new Promise((resolve, reject) => {
  reject("error message");
});

// 这里catch在传入的回调执行完后，默认状态依旧是fulfilled
promise
  .catch((err) => {
    console.log("err1", err); // err1 error message
    // 这里相当于 return undefined => return new Promsie((resolve,reject)=>{resolve(undefined)})
  })
  .catch((err) => {
    console.log("err2", err);
  })
  .then((res) => {
    console.log("res", res); // res undefined
  });

// 如果想要在后续继续执行catch，需要抛出一个异常
promise
  .catch((err) => {
    console.log("err1", err); // err1 error message
    throw new Error("error message");
  })
  .catch((err) => {
    console.log("err2", err); // err2 Error: error message + 调用栈的相关信息
  })
  .then((res) => {
    console.log("res", res); // res undefined
  });
```

### finally 方法

finally 是在 ES9(ES2018)中新增的一个特性：表示无论 Promise 对象无论变成 fulfilled 还是 reject 状态，最终都会被执行的代码。

finally 方法是不接收参数的，因为无论前面是 fulfilled 状态，还是 reject 状态，它都会执行。

```js
const promise = new Promise((reslove, reject) => {
  reject("rejected");
});

promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err); // err rejected
  })
  .finally(() => {
    console.log("finally action"); // finally action
    // 这里依然是相当于return undefined
  });
```

## Promsie 类方法

### resolve 方法

前面我们学习的 then、catch、finally 方法都属于 Promise 的实例方法，都是存放在 Promise 的 prototype 上的。

有时候我们已经有一个现成的内容了，希望将其转成 Promise 来使用，这个时候我们可以使用 Promise.resolve 方法来完成。

**Promise.resolve 的用法相当于 new Promise，并且执行 resolve 操作。**（所以与前面讲的实例方法 resolve 是一致的）

resolve 参数的形态:

- 情况一:参数是一个普通的值或者对象
- 情况二:参数本身是 Promise
- 情况三:参数是一个 thenable

### reject 方法

reject 方法类似于 resolve 方法，只是会将 Promise 对象的状态设置为 reject 状态。

**Promise.reject 的用法相当于 new Promise，只是会调用 reject。**

Promise.reject 传入的参数无论是什么形态，都会直接作为 reject 状态的参数传递到 catch 的。

### all 方法

Promise.all 的作用是将多个 Promise 包裹在一起形成一个新的 Promise。

新的 Promise 状态由包裹的所有 Promise 共同决定：

- 当所有的 Promise 状态变成 fulfilled 状态时，新的 Promise 状态为 fulfilled，并且会将所有 Promise 的返回值 组成一个数组;
- 当有一个 Promise 状态为 reject 时，新的 Promise 状态为 reject，并且会将第一个 reject 的返回值作为参数;

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

// 所有的Promise都变成fulfilled时, 再拿到结果
// 在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
// "aaa" 相当于 Promise.resolve("aaa")
// 按照放入数组的顺序
Promise.all([p2, p1, p3, "aaaa"])
  .then((res) => {
    console.log(res); // 如果 p2 是 resolve，那么这里三秒后打印  [22222,11111,33333,aaaa]
  })
  .catch((err) => {
    console.log("err:", err); // 两秒后打印 err 22222
  });
```

### allSettled 方法

all 方法有一个缺陷：当有其中一个 Promise 变成 reject 状态时，新 Promise 就会立即变成对应的 reject 状态。

那么对于 resolved 的，以及依然处于 pending 状态的 Promise，我们是获取不到对应的结果的;

在 ES11(ES2020)中，添加了新的 API Promise.allSettled：

- 该方法会在所有的 Promise 都有结果（settled），无论是 fulfilled，还是 reject 时，才会有最终的状态；
- 并且这个 Promise 的结果一定是 fulfilled 的；

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

// allSettled
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

打印结果：

```js
[
  { status: "fulfilled", value: 11111 },
  { status: "rejected", reason: 22222 },
  { status: "fulfilled", value: 33333 },
];
```

- allSettled 的结果是一个数组，数组中存放着每一个 Promise 的结果，并且是对应一个对象的
- 这个对象中包含 status 状态，以及对应的 value 值或者 renson 值;

### race 方法

如果有一个 Promise 有了结果，我们就希望决定最终新 Promise 的状态，那么可以使用 race 方法:

- race 是竞技、竞赛的意思，表示多个 Promise 相互竞争，谁先有结果，那么就使用谁的结果;

### any 方法

any 方法是 ES12 （ES2021）中新增的方法，和 race 方法是类似的：

- any 方法会等到一个 fulfilled 状态，然后决定新 Promise 的状态；
- 如果所有的 Promise 都是 reject 的，那么也会等到所有的 Promise 都变成 rejected 状态；然后会报一个 AggregateError 的错误。

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(11111)
    reject(1111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(33333)
    reject(3333);
  }, 3000);
});

// any方法
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err); // err: AggregateError: All promises were rejected
    // 这个err里面有一个属性叫 errors，可以拿到错误值（所有reject的参数组成的数组）
  });
```

## 手写

推荐这一篇：https://juejin.cn/post/6945319439772434469

```js
// MyPromise.js

// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 新建 MyPromise 类
class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  // 储存状态的变量，初始值是 pending
  status = PENDING;
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 存储成功回调函数
  onFulfilledCallbacks = [];
  // 存储失败回调函数
  onRejectedCallbacks = [];

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      // resolve里面将所有成功的回调拿出来执行
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  };

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // resolve里面将所有失败的回调拿出来执行
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理，所以会发生值穿透现象
    const realOnFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    const realOnRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
    const promise2 = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 获取成功回调函数的执行结果
            const x = realOnFulfilled(this.value);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedMicrotask = () => {
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = realOnRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      // 判断状态
      if (this.status === FULFILLED) {
        fulfilledMicrotask();
      } else if (this.status === REJECTED) {
        rejectedMicrotask();
      } else if (this.status === PENDING) {
        // 等待
        // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // 等到执行成功失败函数的时候再传递
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });

    return promise2;
  }

  // resolve 静态方法
  static resolve(parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise((resolve) => {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 如果相等了，说明return的是自己，抛出类型错误并返回
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 判断x是不是 MyPromise 实例对象
  if (x instanceof MyPromise) {
    // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
    // x.then(value => resolve(value), reason => reject(reason))
    // 简化之后
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}

module.exports = MyPromise;
```

关于值穿透可见：

- [Promise 值穿透](https://www.jianshu.com/p/4e8aaa87540a)
- [史上最易读懂的 Promise/A+ 完全实现](https://zhuanlan.zhihu.com/p/21834559)
