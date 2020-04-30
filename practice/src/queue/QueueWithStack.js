const Stack = require("../stack/Stack");

module.exports = class QueueWithStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.in = new Stack();
    this.out = new Stack();
  }

  enqueue(data) {
    this.in.push(data);
  }

  dequeue() {
    if (this.out.length === 0) {
      if (this.in.length === 0) {
        return null;
      }
      while (this.in.length > 0) {
        this.out.push(this.in.pop().data);
      }
    }
    return this.out.pop();
  }

  toString() {
    return (
      this.in.toString() +
      " " +
      this.out
        .toString()
        .split(" ")
        .reverse()
        .join(" ")
    ).trim();
  }
};
