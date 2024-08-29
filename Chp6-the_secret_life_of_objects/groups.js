class Group {
  constructor() {
    this.members = [];
  }
  static from(array) {
    let group = new Group();
    for (let value of array) {
      group.add(value);
    }
    return group;
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
