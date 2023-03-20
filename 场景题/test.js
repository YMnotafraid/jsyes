function SnapPea(name) {
  const obj = Object.create(SnapPea.prototype);
  obj.name = name;
  return obj;
}
var tick = new SnapPea("tick");
var tock = SnapPea("tock");
console.log(tick instanceof SnapPea && tock instanceof SnapPea);
