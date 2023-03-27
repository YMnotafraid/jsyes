class LRUcache {
  constructor(size) {
    this.cache = new Map();
    this.len = size;
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    if (this.cache.size >= this.len) {
      let index = this.cache.keys().next().value;
      this.cache.delete(index);
      this.cache.set(key, value);
    }
    this.cache.set(key, value);
  }
  toString() {
    console.log(this.len);
    console.table(this.cache);
  }
}
const lruCache6 = new LRUcache(2);
lruCache6.put(1, "first");
lruCache6.put(2, "second");
lruCache6.toString();
lruCache6.get(1);
lruCache6.toString();
lruCache6.put(3, "third");
lruCache6.toString();
