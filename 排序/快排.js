//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];

function quickSort(data) {
    const arr = [...data];
    if (arr.length < 2) return arr;
    let left = [],
        right = [];
    let cur = arr.shift();
    for (let num of arr) {
        num > cur ? right.push(num) : left.push(num);
    }
    return [...quickSort(left), cur, ...quickSort(right)];
}


function qs(l, r) {
    if (l >= r) return;
    let mid = arr[~~(l + r) / 2];
    let i = l - 1,
        j = r + 1;
    while (i < j) {
        do { i++; } while (arr[i] < mid);
        do { j--; } while (arr[j] > mid);
        if (i < j)[arr[i], arr[j]] = [arr[j], arr[i]];
    }
    qs(l, j);
    qs(j + 1, r);
}
console.log(quickSort(arr));
qs(0, arr.length - 1)
console.log(arr);