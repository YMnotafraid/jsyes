Promise.myresolve = (value) => {
  //当前数据是promise对象直接返回
  if (value instanceof Promise) return value;
  //将数据包装成promise对象并返回
  return new Promise((resolve, reject) => {
    //判断是否为thenable对象
    if (value && typeof value.then === "function") {
      value.then(resolve, reject); //过滤掉then方法
    } else {
      resolve(value); //返回成功状态的promise对象
    }
  });
};
const obj = { then: (resolve) => resolve("xx") };
Promise.myresolve(obj).then((res) => console.log(res));
