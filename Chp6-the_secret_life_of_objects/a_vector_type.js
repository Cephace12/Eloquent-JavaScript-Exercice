class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    let newX = this.x + other.x;
    let newY = this.y + other.y;
    let newVector = new Vec(newX, newY);
    return newVector;
  }
  minus(other) {
    let newX = this.x - other.x;
    let newY = this.y - other.y;
    let newVector = new Vec(newX, newY);
    return newVector;
  }
  get length() {
    let squaresum = this.x * this.x + this.y * this.y;
    let newVec = Math.sqrt(squaresum);
    return newVec;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
