const arr = [1, 2, [3, 4], [5, [6]], 7];

//flat
const arr1 = arr.flat(Infinity);

//递归
function flatArr(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flatArr(item));
    } else {
      res.push(item);
    }
  }
  return res;
}
console.log(flatArr(arr));
