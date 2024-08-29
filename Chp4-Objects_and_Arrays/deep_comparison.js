function deepEqual(x, y) {
  if (typeof x !== typeof y) return false;
  if (typeof x !== "object") return x === y;

  let keys = Object.keys(x);
  for (let key of keys) {
    if (!deepEqual(x[key], y[key])) return false;
  }
  return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual("obj", "obj"));
console.log(deepEqual(3, 3));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
