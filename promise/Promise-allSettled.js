Promise.myallsettled = (promises) => {
  const ans = [];
  for (let promise of promises) {
    const res = Promise.resolve(promise)
      .then((value) => {
        return { status: "fulfilled", value };
      })
      .catch((reason) => {
        return { status: "rejected", reason };
      });
    ans.push(res);
  }
  return Promise.all(ans);
};
Promise.myallsettled([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
  4,
]).then(
  (res) => console.log(res), //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 3 },
  //   { status: 'fulfilled', value: 4 }
  (rej) => console.log(rej)
);
