// function mergeSort(arr) {
//     if (arr.length < 2) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// function merge(left, right) {
//     let res = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             res.push(left.shift());
//         } else {
//             res.push(right.shift());
//         }
//     }
//     return [...res, ...left, ...right];
// }


// //test
// const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
// // console.log(mergeSort(arr));
// console.log(msort(arr));


function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = ~~(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(arr1, arr2) {
    let res = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
    }
    return [...res, ...arr1, ...arr2];
}






//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
// console.log(mergeSort(arr));
console.log(mergeSort(arr));