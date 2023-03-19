function Promise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  this.onResolvedCallbacks = [];
  this.onRejectedCallbacks = [];

  let _this = this;

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
  function resolve(value) {
    if ((_this.state = "pending")) {
      _this.state = "resolved";
      _this.value = value;
      _this.onResolvedCallbacks.forEach((cb) => cb(value));
    }
  }
  function reject(reason) {
    if ((_this.state = "pending")) {
      _this.state = "rejected";
      _this.reason = reason;
      _this.onRejectedCallbacks.forEach((cb) => cb(reason));
    }
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  //如果then中无回调，实现值传递
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (err) => {
          throw err;
        };
  let promise2 = new Promise((resolve, reject) => {
    //异步
    if (this.state === "pending") {
      this.onResolvedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
      this.onRejectedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
    //同步
    if (this.state === "resolved") {
      queueMicrotask(() => {
        try {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (this.state === "rejected") {
      queueMicrotask(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
  });
  return promise2;
};
/**
 * 解析then返回值与新Promise对象
 * @param {Object} 新的Promise对象，就是我们创建的promise2实例
 * @param {*} x 上一个then的返回值
 * @param {Function} resolve promise2处理器函数的resolve
 * @param {Function} reject promise2处理器函数的reject
 */

function resolvePromise(promise2, x, resolve, reject) {
  let called;
  if (promise2 === x) {
    reject(new TypeError("请避免Promise循环引用"));
  }
  //返回值x是个对象或者函数
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    //x是普通值
    resolve(x);
  }
}

Promise.prototype.catch = function (reject) {
  return this.then(null, reject);
};

// const p = new Promise((resolve, reject) => {
//   resolve(1);
// });
// p.then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     resolve(
//       new Promise((resolve, reject) => {
//         reject(22);
//       })
//     );
//   });
// })
//   .then(
//     (res) => console.log(res)
//     // (err) => console.log(err)
//   )
//   .catch((err) => console.log(err));

// promises-aplus-tests测试
Promise.defer = Promise.deferred = function () {
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};
try {
  module.exports = Promise;
} catch (e) {}
