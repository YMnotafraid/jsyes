const myDeepClone = (target, map = new WeakMap()) => {
  //基本数据直接返回
  if (typeof target !== "object" || target === "null") return target;
  //处理特殊对象
  const constructor = target.constructor();
  if (/^Date|Function|RegExp|Map|Set$/i.test(constructor.name))
    return new constructor(target);
  //避免循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (let key in target) {
    //判断当前属性是否在实例上而不是在原型上
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = myDeepClone(target[key], map);
    }
  }
  return cloneTarget;
};
const a1 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};
const a2 = myDeepClone(a1);

a1.field3.child = "zhangsan";
console.log(a1, a2);
