Array.prototype.mymap = function(callback, thisArg) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback.call(thisArg, this[i], i, this));
        //回调函数默认的this为undefined,thisArg作为回调函数的this
    }
    return res;
};

Array.prototype.mymap = function(fn, thisArg) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(fn.call(thisArg, this[i], i, this));
    }
    return res;
}

Array.prototype.mymap = function(fn, thisArg) {
    const res = [];
    this.forEach((item, index) => {
        res.push(fn.call(thisArg, item, index, this));
    })
    return res;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(
    arr1.mymap(function(item, index, arr) {
        return 2 * this[index];
    }, arr2)
); //[ 8, 10, 12 ]