function range(start, end, step) {
  let array = [];
  if (start > end) {
    console.error("Le premier parametre doit être inférieur au deuxème");
    return;
  } else {
    for (let i = start; i <= end; i++) array.push(i);
  }
  return array;
}
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(range(1, 10));
// console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
