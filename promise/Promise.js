function Promise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  // 保存成功回调
  this.onResolvedCallbacks = [];
  // 保存失败回调
  this.onRejectedCallbacks = [];

  let _this = this;
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }

  function resolve(value) {
    if (_this.state === "pending") {
      _this.state = "resolved";
      _this.value = value;
      _this.onResolvedCallbacks.forEach((cb) => cb(value));
    }
  }
  function reject(reason) {
    if (_this.state === "pending") {
      _this.state = "rejected";
      _this.reason = reason;
      _this.onRejectedCallbacks.forEach((cb) => cb(reason));
    }
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (err) => {
          throw err;
        };

  let promise2 = new Promise((resolve, reject) => {
    // 等待态判断，此时异步代码还未走完，回调入数组队列
    if (this.state === "pending") {
      this.onResolvedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });

      this.onRejectedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    if (this.state === "resolved") {
      queueMicrotask(() => {
        try {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }
    if (this.state === "rejected") {
      queueMicrotask(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
  return promise2;
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    reject(new TypeError("请避免Promise循环引用"));
  }
  let called;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    // 可能是个对象或是函数
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            // 递归调用，传入y若是Promise对象，继续循环
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
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 普通值结束递归
    resolve(x);
  }
}
