// class LRUcache {
//   constructor(size) {
//     this.cache = new Map();
//     this.len = size;
//   }
//   get(key) {
//     if (!this.cache.has(key)) {
//       return -1;
//     }
//     let value = this.cache.get(key);
//     this.cache.delete(key);
//     this.cache.set(key, value);
//   }
//   put(key, value) {
//     if (this.cache.get(key)) {
//       this.cache.delete(key);
//       this.cache.set(key, value);
//     }
//     if (this.cache.size >= this.len) {
//       const key = this.cache.keys().next().value;
//       this.cache.delete(key);
//     }
//     this.cache.set(key, value);
//   }
//   toString() {
//     console.log(this.len);
//     console.table(this.cache);
//   }
// }
// const lruCache6 = new LRUcache(2);
// lruCache6.put(1, "first");
// lruCache6.put(2, "second");
// lruCache6.toString();
// lruCache6.get(1);
// lruCache6.toString();
// lruCache6.put(3, "third");
// lruCache6.toString();

//map + 双链表
//优化点：删除操作时间复杂度实现o(1)
function LinkNode(key, val) {
  this.val = val;
  this.key = key;
  this.next = null;
  this.pre = null;
}

function LinkList() {
  let head = new LinkNode("head", "head");
  let tail = new LinkNode("tail", "tail");
  head.next = tail;
  tail.pre = head;
  this.head = head;
  this.tail = tail;
}

LinkList.prototype.append = function (node) {
  node.next = this.head.next;
  node.pre = this.head;
  this.head.next.pre = node;
  this.head.next = node;
};

LinkList.prototype.delete = function (node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
};

LinkList.prototype.pop = function () {
  let node = this.tail.pre;
  node.pre.next = this.tail;
  this.tail.pre = node.pre;
  return node;
};

LinkList.prototype.print = function (key = "val") {
  let cur = this.head;
  let res = "";
  while (cur) {
    cur = cur.next;
    res += cur[key];
    res += "->";
  }
  console.log(res);
};

const LRUcache = function (size) {
  this.len = size;
  this.map = new Map();
  this.list = new LinkList();
};

LRUcache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
    node.val = value;
    this.list.delete(node);
    this.list.append(node);
  } else {
    let node = new LinkNode(key, value);
    if (this.len === this.map.size) {
      let renode = this.list.pop();
      this.map.delete(renode.key);
    }
    this.list.append(node);
    this.map.set(key, node);
  }
};

LRUcache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  let node = this.map.get(key);
  this.list.delete(node);
  this.list.append(node);
  return node.val;
};
const obj = new LRUcache(2);
obj.put(1, 1); // 1
obj.put(2, 2); // 2 -> 1
console.log(obj.get(1)); // 1 -> 2
obj.put(3, 3); // 3 -> 1
console.log(obj.get(2)); // 此时缓存里没有2的位置了，因此会返回-1
obj.put(4, 4); // 4 -> 3
console.log(obj.get(1)); // 此时缓存里没有1的位置了，因此会返回-1
console.log(obj.get(3)); // 3 -> 4
console.log(obj.get(4)); // 4 -> 3
