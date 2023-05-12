/* @param {any} a
 * @param {any} b
 * @return {boolean}
 */
const map = new Map(); // 避免循环引用
function isEqual(a, b) {
  // primitive Types
  if (!isObject(a) || !isObject(b)) {
    return a === b;
  }
  // is same referance?
  if (a === b) {
    return true;
  }
  // Optional: for different types but same primitive value
  // (改进3)
  if (!isSameType(a, b)) {
    return false;
  }
  // support circular reference in array and object
  if (map.has(a) || map.has(b)) {
    return true;
  }
  map.set(a, b);
  // support symbol as keys
  // (改进2)
  const aKeys = [...Object.keys(a), ...Object.getOwnPropertySymbols(a)];
  const bKeys = [...Object.keys(b), ...Object.getOwnPropertySymbols(b)];
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i++) {
    // (改进4)
    if (aKeys[i] !== bKeys[i]) return false;
    const res = isEqual(a[aKeys[i]], b[bKeys[i]]);
    if (!res) {
      return false;
    }
  }
  return true;
}

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function isSameType(a, b) {
  return (
    Object.prototype.toString.call(a) === Object.prototype.toString.call(b)
  );
}
const obj1 = { 0: 1 };
const arr = { 0: 2 };
console.log(isEqual(obj1, arr));
