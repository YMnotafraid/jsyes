//美团笔试
const start = [1, 2, 3];
const end = [3, 2, 1];
function isValue() {
  let i = 0,
    j = 0;
  const st = [];
  while (j < end.length) {
    while (!st.length || st[st.length - 1] !== end[j]) {
      if (i < start.length) st.push(start[i++]);
      else return false;
    }
    st.pop();
    j++;
  }
  if (st.length === 0) return true;
  return false;
}

console.log(isValue());
