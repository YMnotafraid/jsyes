const mydeepClone = (target, map = new WeakMap()) => {
  if (typeof target !== "object" || target === "null") return target;
  const constructor = target.constructor;
  if (/^Date|Function|Set|Map|RegExp$/i.test(constructor.name)) {
    return new constructor(target);
  }
  const cloneTarget = Array.isArray(target) ? [] : {};
  if (map.has(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);
  for (let key in target) {
    cloneTarget[key] = mydeepClone(target[key], map);
  }
  return cloneTarget;
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};
target.target = target;
const t1 = mydeepClone(target);
target.field3.child = "CHILD";
console.log(t1, target);
