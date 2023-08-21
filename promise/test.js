async function run() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  const pro = new Promise((resolve, reject) => {
    resolve(3);
  }).then((res) => {
    console.log(res);
    return 4;
  });
  setTimeout(() => {
    console.log(5);
  }, 0);
  console.log(pro);
  console.log(await pro);
}
run();
