const obj = { A: 1, "B.A": 2, "B.B": 3, "CC.D.E": 4, "CC.D.F": 5 };
function _flatten() {
  const res = {};
  for (let key in obj) {
    const val = obj[key];
    let cur = res;
    key.split(".").forEach((item, index, array) => {
      if (!(item in cur)) {
        cur[item] = {};
      }
      if (index === array.length - 1) {
        cur[item] = val;
      } else {
        cur = cur[item];
      }
    });
  }
  console.log(res);
}
_flatten();
