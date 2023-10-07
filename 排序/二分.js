const arr = [1, 2, 3, 4, 5, 7, 9];

function fn(arr, target) {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor(l - (l - r) / 2);
        if (arr[mid] < target) {
            l = mid + 1;
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
console.log(fn(arr, 10));