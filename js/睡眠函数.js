function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
async function fn() {
  await sleep(1000);
  console.log(111);
}
fn();
