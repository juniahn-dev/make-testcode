class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(number) {
    if (!number) {
      throw new Error("Props error");
    } else if (typeof number !== "number") {
      throw new Error("Props not number");
    }

    this.array.push(number);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error("Array is empty");
    }

    this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error("Array is empty");
    }

    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
