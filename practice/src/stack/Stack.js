const Node = require("./Node");

module.exports = class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.previous = this.top;
      this.top = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const removedNode = this.top;
    this.top = this.top.previous;
    removedNode.previous = null;
    this.length -= 1;
    return removedNode;
  }

  getTop() {
    return this.top;
  }

  toString() {
    let current = this.top;
    let returnString = "";
    while (current !== null) {
      returnString += current.data + " ";
      current = current.previous;
    }
    return returnString.trim();
  }
};
