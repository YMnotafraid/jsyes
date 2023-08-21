const arr = [1, 2, 3, 4, 5, 6];

function shuffle(arr) {
  let len = arr.length;
  while (len) {
    let t = ~~(Math.random() * len--);
    [arr[t], arr[len]] = [arr[len], arr[t]];
  }
  return arr;
}
console.log(shuffle(arr));
