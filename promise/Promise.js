function Promise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
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
    }
  }
  function reject(reason) {
    if ((_this.state = "pending")) {
      _this.state = "rejected";
      _this.reason = reason;
    }
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
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
  resolve(0);
});
p.then((res) => console.log(res));
