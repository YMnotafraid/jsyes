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

Promise._allsettled = (ps) => {
  let res = [];
  ps.forEach((p) => {
    let t = Promise.resolve(p).then(
      (value) => {
        return { status: "fulfilled", value };
      },
      (reason) => {
        return { status: "rejected", reason };
      }
    );
    res.push(t);
  });
  return new Promise((resolve, reject) => {
    let ans = [];
    if (!res.length) resolve(ans);
    res.forEach(async (p) => {
      try {
        ans.push(await p);
        if (res.length === ans.length) resolve(ans);
      } catch (error) {
        reject(error);
      }
    });
  });
};

Promise._allsettled([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
  4,
]).then(
  (res) => console.log(res),
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'rejected', reason: 3 },
  //   { status: 'fulfilled', value: 4 }
  (rej) => console.log(rej)
);
