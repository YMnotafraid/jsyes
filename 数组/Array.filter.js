Array.prototype.myfilter = function(fn) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) res.push(this[i]);
    }
    return res;
};

Array.prototype.myfilter = function(fn) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) res.push(this[i]);
    }
    return res;
}


const arr = [1, 2, 3, 3, 4, 5, 6, 7];
const res = arr.myfilter((item) => item > 2);
console.log(res);