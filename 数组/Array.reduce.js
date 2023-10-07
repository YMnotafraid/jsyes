Array.prototype.myreduce = function(fn, ...args) {
    let pre = args.length ? args[0] : 0;
    for (let i = 0; i < this.length; i++) {
        pre = fn(pre, this[i], i, this);
    }
    return pre;
}
const arr = [1, 2, 3, 4];
console.log(arr.myreduce((pre, cur) => pre + cur, 3, 3, 4));

function myreduce(fn, ...args) {
    let pre = pre.length ? args[0] : 0;
    for (let i = 0; i < this.length; i++) {
        pre = fn(pre, this[i], i, this);
    }
    return pre;
}