Promise.myall = (promises) => {
    //判断当前数据能否迭代
    if (!(
            typeof promises === "object" &&
            promises !== null &&
            typeof promises[Symbol.iterator] === "function"
        )) {
        throw new TypeError(`${promises} is not iterable`);
    }
    return new Promise((resolve, reject) => {
        const len = promises.length;
        if (len === 0) return resolve([]);
        const ans = [];
        promises.forEach(async(promise) => {
            try {
                ans.push(await promise);
                //当所有promise对象都成功时返回成功的promise对象
                if (ans.length === len) resolve(ans);
            } catch (error) {
                //当出现失败的promise对象时立刻返回错误的原因error
                reject(error);
            }
        });
    });
};

Promise._all = function(promises) {
    if (!(typeof promises === "object" && typeof promises !== null && typeof promises[Symbol.iterator] === "function")) {
        throw new TypeError("");
    }
    return new Promise((res, rej) => {
        if (!promises.length) res([]);
        const ans = [];
        promises.forEach(async(p) => {
            try {
                ans.push(await p);
                if (promises.length === ans.length) res(ans);
            } catch (error) {
                rej(error);
            }
        })
    })
}


//test
try {
    Promise._all({}).then(
        (res) => console.log(res),
        (rej) => console.log(rej)
    ); //TypeError: [object Object] is not iterable
} catch (error) {
    console.log(error);
}

Promise._all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    4,
]).then(
    (res) => console.log(res), //[ 1, 2, 3, 4 ]
    (rej) => console.log(rej)
);
Promise._all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
    4,
]).then(
    (res) => console.log(res),
    (rej) => console.log(rej) // 3
);

Promise._all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3).catch((err) => console.log(err)), //3
    4,
]).then(
    (res) => console.log(res), //[ 1, 2, 4, undefined ]
    (rej) => console.log(rej)
);