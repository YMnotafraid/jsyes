Promise.myall = (promises) => {
  //判断当前数据能否迭代
  if (
    !(
      typeof promises === "object" &&
      promises !== null &&
      typeof promises[Symbol.iterator] === "function"
    )
  ) {
    throw new TypeError(`${promises} is not iterable`);
  }
  promises = [...promises];
  return new Promise((resolve, reject) => {
    const len = promises.length;
    if (len === 0) return resolve([]);
    const ans = [];
    let cnt = 0;
    promises.forEach(async (promise) => {
      try {
        const res = await promise;
        ans.push(res);
        //当所有promise对象都成功时返回成功的promise对象
        if (++cnt === len) resolve(ans);
      } catch (error) {
        //当出现失败的promise对象时立刻返回错误的原因error
        reject(error);
      }
    });
  });
};

//test
try {
  Promise.myall({}).then(
    (res) => console.log(res),
    (rej) => console.log(rej)
  ); //TypeError: [object Object] is not iterable
} catch (error) {
  console.log(error);
}

Promise.myall([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  4,
]).then(
  (res) => console.log(res), //[ 1, 2, 3, 4 ]
  (rej) => console.log(rej)
);
Promise.myall([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
  4,
]).then(
  (res) => console.log(res),
  (rej) => console.log(rej) // 3
);

Promise.myall([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3).catch((err) => console.log(err)), //3
  4,
]).then(
  (res) => console.log(res), //[ 1, 2, 4, undefined ]
  (rej) => console.log(rej)
);
