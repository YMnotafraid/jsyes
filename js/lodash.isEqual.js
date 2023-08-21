function isObject(a) {
  return typeof a === "object" && a !== "null";
}
function sameType(a, b) {
  return (
    Object.prototype.toString.call(a) === Object.prototype.toString.call(b)
  );
}
const map = new Map();
function isEqual(a, b) {
  if (!isObject(a) || !isObject(b)) return a === b;
  if (!sameType(a, b)) return false;
  if (map.has(a) || map.has(b)) return true;
  map.set(a, b);
  let akeys = [...Object.keys(a), ...Object.getOwnPropertySymbols(a)];
  let bkeys = [...Object.keys(b), ...Object.getOwnPropertySymbols(b)];
  for (let i = 0; i < akeys.length; i++) {
    if (akeys[i] !== bkeys[i]) return false;
    const res = isEqual(a[akeys[i]], b[bkeys[i]]);
    if (!res) return false;
  }
  return true;
}

const obj1 = { prop: null };
const obj2 = { prop: obj1 };
obj1.prop = obj2;

console.log(isEqual(obj1, obj2));
