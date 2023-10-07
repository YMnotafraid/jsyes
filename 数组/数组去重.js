const arr = [1, 1, 2, 2, 3, 3];
//es6
console.log([...new Set(arr)]);
//map
function uniqueArr(arr) {
    const map = new Map();
    arr.forEach((num) => {
        if (!map.get(num)) {
            map.set(num, 1);
        }
    })
    return [...map.entries()].map((i) => i[0]);
}
console.log(uniqueArr(arr));

//filter
function uniqueArr1(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(uniqueArr1(arr));
//reduce
function uniqueArr2(arr) {
    return arr.reduce((pre, cur) => {
        if (!pre.includes(cur)) pre.push(cur);
        return pre;
    }, []);
}

function uniqueArr2(arr) {
    return arr.reduce((pre, cur) => {
        if (!pre.includes(cur)) pre.push(cur);
        return pre;
    }, []);
}


console.log(uniqueArr2(arr));