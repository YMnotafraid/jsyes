Promise.myrace = (promises) => {
    return new Promise((res, rej) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(res, rej);
            //Promise.resolve(promise).then((data)=>res(data),(err)=>rej(err));
        })
    })
}

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


Promise._race = function(promises) {
    return new Promise((res, rej) => {
        promises.forEach((p) => {
            Promise.resolve(p).then(res, rej);
        })
    })
}