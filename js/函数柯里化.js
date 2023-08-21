function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3, 4)); // 输出 6
console.log(curriedAdd(1, 2)(3)); // 输出 6

function fn(...args) {
  console.log(args);
}
fn([[1, 2], [3]]);
console.log(...[1, 2], ...[3]);
