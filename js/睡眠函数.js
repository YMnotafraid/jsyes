function sleep(time) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
}
async function getData() {
  await sleep(1000);
  console.log(111);
}
getData();
