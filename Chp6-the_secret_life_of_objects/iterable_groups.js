class Group {
  constructor() {
    this.members = [];
  }
  static from(array) {
    let group = new Group();
    for (let element of array) {
      group.add(element);
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
    this.members = this.members.filter((element) => element !== value);
  }

  *[Symbol.iterator]() {
    for (let member of this.members) {
      yield member;
    }
  }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
