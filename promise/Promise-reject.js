// Promise.myreject = (value) => {
//     return new Promise((resolve, reject) => {
//         reject(value);
//     });
// };
Promise.myreject = (value) => {
    return new Promise((res, rej) => {
        return rej(value);
    })
}

Promise.myreject(3).catch((err) => console.log(err));