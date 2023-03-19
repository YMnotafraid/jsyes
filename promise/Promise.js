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
  //异步
  if (this.state === "pending") {
    if (typeof onFulfilled === "function") {
      this.onResolvedCallbacks.push(onFulfilled);
    }
    if (typeof onFulfilled === "function") {
      this.onRejectedCallbacks.push(onRejected);
    }
  }
  //同步
  if (this.state === "resolved") {
    if (typeof onFulfilled === "function") {
      onFulfilled(this.value);
    }
  }
  if (this.state === "rejected") {
    if (typeof onRejected === "function") {
      onRejected(this.reason);
    }
  }
};
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 1000);
});
p.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
