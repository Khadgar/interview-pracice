const Node = require("./Node");

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  get(index) {
    if (index > -1) {
      let currentIndex = 0;
      let current = this.head;
      while (current !== null && currentIndex < index) {
        currentIndex += 1;
        current = current.next;
      }
      return current ? current.data : undefined;
    }
    return undefined;
  }

  // swap prev and next using a temp update head every iteration
  reverse() {
    let current = this.head;
    this.tail = current; //new tail will be the old head
    while (current != null) {
      let temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      this.head = current;
      current = current.prev;
    }
  }

  toString() {
    let returnString = "";
    let current = this.head;
    while (current != null) {
      returnString += current.data + " ";
      current = current.next;
    }
    return this.size > 0
      ? returnString
          .trim()
          .split(" ")
          .join("<=>")
      : "empty";
  }

  toStringReverse() {
    let returnString = "";
    let current = this.tail;
    while (current != null) {
      returnString += current.data + " ";
      current = current.prev;
    }
    return this.size > 0
      ? returnString
          .trim()
          .split(" ")
          .join("<=>")
      : "empty";
  }
};
