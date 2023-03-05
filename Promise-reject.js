Promise.myreject = (value) => {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};
Promise.reject(3).catch((err) => console.log(err));
