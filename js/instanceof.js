function myinstanceof(left, right) {
  let lpro = left.__proto__; //Object.getPrototypeOf(left)
  let rpro = right.prototype;
  while (lpro) {
    if (lpro === rpro) return true;
    lpro = lpro.__proto__;
  }
  return false;
}

console.log(myinstanceof(Function, Function)); //true
