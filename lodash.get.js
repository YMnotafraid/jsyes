function myget(obj, path, defalut = undefined) {
  let newpath = [];
  if (Array.isArray(path)) {
    newpath = path;
  } else {
    newpath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  return (
    newpath.reduce((pre, cur) => {
      return (pre || {})[cur];
    }, obj) || defalut
  );
}

var object = { a: [{ b: { c: 3 } }] };

console.log(myget(object, "a[0].b.c"));
// => 3

console.log(myget(object, ["a", "0", "b", "c"]));
// => 3

console.log(myget(object, "a.b.c", "default"));
// => 'default'
