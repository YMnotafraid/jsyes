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
//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
console.log(qs(arr));
