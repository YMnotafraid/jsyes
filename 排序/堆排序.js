const arr = [98, 42, 25, 54, 125, 3, 25, 72, 41, 10, 121];

// function heapSort(arr) {
//     let len = arr.length;
//     //建堆，自底向上，从最后一个非叶子节点开始
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//         adjust(i);
//     }
//     console.log(arr);

//     //下沉
//     for (let i = arr.length - 1; i >= 0; i--) {
//         [arr[i], arr[0]] = [arr[0], arr[i]];
//         len--;
//         adjust(0);
//     }
//     //调整
//     function adjust(i) {
//         let left = 2 * i + 1,
//             right = 2 * i + 2,
//             max = i;
//         if (left < len && arr[left] > arr[max]) max = left;
//         if (right < len && arr[right] > arr[max]) max = right;
//         if (max !== i) {
//             [arr[max], arr[i]] = [arr[i], arr[max]];
//             adjust(max);
//         }
//     }
//     return arr;
// }
// console.log(heapSort(arr));

function test(arr) {
    let len = arr.length;
    for (let i = ~~(len / 2 - 1); i >= 0; i--) {
        adjust(i);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        len--;
        adjust(0);
    }

    function adjust(i) {
        let max = i,
            left = 2 * i + 1,
            right = 2 * i + 2;
        if (left < len && arr[max] < arr[left]) max = left;
        if (right < len && arr[max] < arr[right]) max = right;
        if (max !== i) {
            [arr[max], arr[i]] = [arr[i], arr[max]];
            adjust(max);
        }
    }
    return arr;
}
console.log(test(arr));