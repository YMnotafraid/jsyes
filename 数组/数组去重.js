const arr = [1, 1, 2, 2, 3, 3];
//es6
console.log([...new Set(arr)]);
//map
function uniqueArr(arr) {
  const map = new Map();
  for (let num of arr) {
    if (!map.get(num)) {
      map.set(num, 1);
    }
  }
  return [...map.entries()].map((i) => i[0]);
}

console.log(uniqueArr(arr));
