function SuperType(_name) {
  this.colors = ["red", "blue", "green"];
  this.name = _name;
}
SuperType.prototype.getName = function () {
  console.log(this.name);
};
function SubType(_name, age) {
  SuperType.call(this, _name);
  this.age = age;
}
//Object.create()返回一个空对象，函数参数将作为空对象的原型对象
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;

SubType.prototype.getAge = function () {
  console.log(this.age);
};

let instance1 = new SubType("lbw", 18);
instance1.colors.push("black");
console.log(instance1.colors); //[ 'red', 'blue', 'green', 'black' ]
instance1.getName(); //lbw
instance1.getAge(); //18

let instance2 = new SubType("white", 28);
console.log(instance2.colors); //[ 'red', 'blue', 'green' ]
instance2.getName(); //white
instance2.getAge(); //28
