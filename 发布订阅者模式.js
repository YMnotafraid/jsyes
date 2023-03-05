class EventEmiter {
  constructor() {
    this.cache = {};
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }
  off(name, fn) {
    if (this.cache[name]) {
      let index = this.cache[name].findIndex((f) => f === fn);
      if (index >= 0) {
        this.cache[name].splice(inde, 1);
      }
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = [...this.cache[name]];
      tasks.forEach((callback) => callback(...args));
      if (once) {
        delete this.cache[name];
      }
    }
  }
}

//test
let eventsBus = new EventEmiter();
let fn1 = function (name, age) {
  console.log(name, age);
};
let fn2 = function (name, age) {
  console.log("fn", name, age);
};
eventsBus.on("test", fn1);
eventsBus.on("test", fn2);
eventsBus.emit("test", false, "Jason", 18);
