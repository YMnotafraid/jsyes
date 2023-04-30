function mergesort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
}
//test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(mergesort(arr));
