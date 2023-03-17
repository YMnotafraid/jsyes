Array.prototype.myreduce = function (callback, ...args) {
  let start = 0,
    pre = 0;
  if (args.length) {
    pre = args[0];
  }
  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};

const arr = [1, 2, 3, 4];
console.log(arr.myreduce((pre, cur) => pre + cur, 2, 3, 4));
