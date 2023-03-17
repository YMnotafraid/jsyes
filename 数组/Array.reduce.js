Array.prototype.myreduce = function (callback, ...args) {
  let pre = args.length ? args[0] : 0;
  for (let i = 0; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};

const arr = [1, 2, 3, 4];
console.log(arr.myreduce((pre, cur) => pre + cur, 3, 3, 4));
