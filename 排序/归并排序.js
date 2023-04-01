//lc合并两个有序数组核心思想
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const len = arr.length;
  const mid = Math.floor(len / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid, len));
  return mergeArr(leftArr, rightArr);
}
function mergeArr(left, right) {
  let i = 0,
    j = 0;
  const res = [];
  while (i < left.length && j < right.length) {
    left[i] < right[j] ? res.push(left[i++]) : res.push(right[j++]);
  }
  return i < left.length
    ? [...res, ...left.slice(i)]
    : [...res, ...right.slice(j)];
}
//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(mergeSort(arr));
