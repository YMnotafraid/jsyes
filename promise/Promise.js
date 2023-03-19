function Promise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
  let _this = this;
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
