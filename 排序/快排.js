function quickSort(arr) {
  if (arr.length < 2) return arr;
  const left = [],
    right = [],
    cur = arr.splice(0, 1)[0];
  for (let item of arr) {
    item > cur ? right.push(item) : left.push(item);
  }
  return [...quickSort(left), cur, ...quickSort(right)];
}
//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
