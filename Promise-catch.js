Promise.prototype.mycatch = (callback) => {
  return this.then(null, callback); //catch本质就是then第二个回调函数的语法糖
};
