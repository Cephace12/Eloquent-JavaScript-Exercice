function reverseArray(array) {
  let counted = [];
  for (let i = array.length - 1; i >= 0; i--) {
    counted.push(array[i]);
  }
  return counted;
}
function reverseArrayInPlace(array) {
  let x = 0;
  let y = array.length - 1;
  while (x < y) {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    x++;
    y--;
  }
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
