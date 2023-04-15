function quickSort(arr) {
  if (arr.length < 2) return arr;
  let left = [],
    right = [];
  let cur = arr.shift();
  for (let num of arr) {
    num > cur ? right.push(num) : left.push(num);
  }
  return [...quickSort(left), cur, ...quickSort(right)];
}

function quick_sort(arr) {
  if (arr.length < 2) return arr;
  let left = [],
    right = [];
  let cur = arr.shift();
  for (let num of arr) {
    num > cur ? right.push(num) : left.push(num);
  }
  return [...quick_sort(left), cur, ...quick_sort(right)];
}

//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
console.log(quick_sort(arr));
