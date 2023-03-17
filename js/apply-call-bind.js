Function.prototype.myapply = function (context, args) {
  context = context || window;
  args = args || [];
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args); //扩展运算符对参数进行深拷贝的浅层拷贝
  delete context[key];
  return res;
};
Function.prototype.mycall = function (context, ...args) {
  context = context || window;
  args = args || [];
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
};
Function.prototype.mybind = function (context, ...args) {
  let self = this;
  args = args || [];
  return function (...newargs) {
    const key = Symbol();
    context[key] = self;
    const res = context[key](...args, ...newargs);
    delete context[key];
    return res;
  };
};

const obj1 = {
  a: 1,
  foo: function (...x) {
    console.log(x);
    console.log(this.a);
  },
};
const obj2 = {
  a: 2,
};

const fn = obj1.foo.mybind(obj2, 1, 2, 3);
fn(3, 4, 5);
