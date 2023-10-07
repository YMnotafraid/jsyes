const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
//deep为数组扁平的深度，默认扁平一层
Array.prototype.myflat = function(deep = 1) {
    const res = [];
    deep--;
    for (let item of this) {
        if (Array.isArray(item) && deep >= 0) {
            res.push(...item.myflat(deep));
        } else {
            res.push(item);
        }
    }
    return res;
};
Array.prototype.myflat = function(deep = 1) {
    const res = [];
    deep--;
    for (let item of this) {
        if (Array.isArray(item) && deep >= 0) {
            res.push(...item.myflat(deep));
        } else {
            res.push(item);
        }
    }
    return res;
}


Array.prototype.myflat = function(deep = 1) {
    const res = [];
    deep--;
    for (let item of this) {
        if (Array.isArray(item) && deep >= 0) {
            res.push(...item.myflat(deep));
        } else {
            res.push(item);
        }
    }
    return res;
}

Array.prototype.myflat = function(deep = 1) {
    const res = [];
    deep--;
    for (let item of this) {
        if (Array.isArray(item) && deep >= 0) {
            res.push(...item.myflat(item));
        } else {
            res.push(item);
        }
    }
    return res;
}
console.log(arr.myflat(2));