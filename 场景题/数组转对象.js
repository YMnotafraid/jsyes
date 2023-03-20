const array = [
  {
    code: 101,
    name: "北京",
  },
  {
    code: 102,
    name: "石家庄",
  },
  {
    code: 102,
    name: "江苏",
    children: [
      {
        code: 102,
        name: "南京",
      },
      {
        code: 102,
        name: "连云港",
      },
    ],
  },
];

function toObj(array) {
  let obj = {};
  for (let value of array) {
    if (!value.children) {
      obj[value.name] = value;
    } else {
      obj = { ...obj, ...toObj(value.children) };
    }
  }
  return obj;
}
let obj = toObj(array);
console.log(obj);
