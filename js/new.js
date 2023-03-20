function mynew(fn, ...args) {
  //实例对象的原型指向构造函数的原型对象
  const obj = Object.create(fn.prototype);
  //构造函数中this指向当前实例实例对象
  const res = fn.apply(obj, args);
  //判断构造函数的返回类型,普通类型则返回obj,引用类型则返回res
  return res instanceof Object ? res : obj;
}

function Fn(a, b) {
  this.name = a;
  this.age = b;
}
Fn.prototype = {
  getAge: function () {
    return this.age;
  },
  getName: function () {
    return this.name;
  },
};

const fn = mynew(Fn, "lbw", 18);
console.log(fn.getAge(), fn.getName());

let n1 = mynew(Number);

console.log(n1 instanceof Number);
