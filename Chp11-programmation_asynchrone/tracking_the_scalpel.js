let nest = {
  name: "Butcher Shop",
};
function anyStorage(nest, current, item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Butcher Shop");
    }, 1000);
  });
}
async function locateScalpel(nest) {
  let current = nest.name;
  for (;;) {
    let next = await anyStorage(nest, current, "scalpel");
    if (next == current) return current;
    current = next;
  }
}

function locateScalpel2(nest) {
  function loop(current) {
    return anyStorage(nest, current, "scalpel").then((next) => {
      if (next == current) return current;
      else return loop(next);
    });
  }
  return loop(nest.name);
}
locateScalpel(nest).then((result) => {
  console.log(result);
});
