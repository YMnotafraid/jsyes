const arr = [1, 2, 3];
// arr.reduce((p, x) => {
//     return p.then(() => {
//         return new Promise((res) => {
//             setTimeout(() => {
//                 res(console.log(x));
//             }, 1000)
//         })
//     })
// }, Promise.resolve())


// 同时输出123
// arr.reduce((p, x) => {
//     console.log('同步任务');
//     return p.then(
//         () => {
//             console.log('微任务');
//             new Promise((r) => {
//                 console.log('宏任务');
//                 setTimeout(() => { r(console.log(x)) }, 1000);
//             })
//         }
//     );
// }, Promise.resolve());


arr.reduce((p, x) => {
    return p.then(() => {
        return new Promise((res) => {
            setTimeout(() => { res(console.log(x)) }, 1000)
        })
    })
}, Promise.resolve())

arr.reduce((pre, cur) => {
    return p.then(() => {
        return new Promise((res) => {
            setTimeout(() => {
                res(console.log(cur));
            }, 1000);
        })
    })
}, Promise.resolve());

arr.reduce((pre, cur) => {
    return pre.then(() => {
        return new Promise(res => {
            setTimeout(() => {
                res(console.log(cur));
            }, 1000);
        })
    })
})