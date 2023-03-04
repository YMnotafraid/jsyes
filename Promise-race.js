Promise.myrace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve, reject);
    }
  });
};

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 4000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 5000);
});

Promise.myrace([p1, p2, p3])
  .then((res) => {
    console.log(res); //3s后打印 1
  })
  .catch((err) => {
    console.log(err);
  });
