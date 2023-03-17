let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];
function list2tree(list) {
  const res = [];
  const map = new Map();
  for (let item of list) {
    const id = item.id;
    const pid = item.pid;
    map[id] = { ...item, children: [] };
    if (!pid) {
      res.push(map[id]);
    } else {
      map[pid].children.push(map[id]);
    }
  }
  return res;
}
console.log(list2tree(arr));
