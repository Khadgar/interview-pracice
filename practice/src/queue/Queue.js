const Node = require('./Node');
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  dequeue() {
    if (this.tail === null) {
      return null;
    } else {
      const itemToPop = this.tail;

      if (this.length() === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
          previous = current;
          current = current.next;
        }

        previous.next = null;
        this.tail = previous;
      }

      return itemToPop;
    }
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.length() < 1;
  }

  length() {
    let current, counter;
    [current, counter] = [this.head, 0];
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  toString() {
    let current = this.head;
    let returnString = '';
    while (current !== null) {
      returnString += current.data + ' ';
      current = current.next;
    }
    return returnString.trim();
  }

  toStringFromTail() {
    let current = this.tail;
    let returnString = '';
    while (current !== null) {
      returnString += current.data + ' ';
      current = current.prev;
    }
    return returnString.trim();
  }
};
