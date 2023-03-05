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
        this.cache[name].splice(index, 1);
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
const f1 = (name, age) => {
  console.log("f1", name, age);
};
const f2 = (name, age) => {
  console.log(name, age);
};
eventsBus.on("test", f1);
eventsBus.on("test", f2);
eventsBus.emit("test", false, "ym", 22);
eventsBus.off("test", f2);
eventsBus.emit("test", false, "ym", 22);
