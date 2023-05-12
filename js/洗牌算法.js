const arr = [1, 2, 3, 4, 5, 6];

function shuffle(arr) {
  let len = arr.length;
  while (len) {
    let t = ~~(Math.random() * len--);
    [arr[len], arr[t]] = [arr[t], arr[len]];
  }
  return arr;
}
console.log(shuffle(arr));
