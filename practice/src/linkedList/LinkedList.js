const Node = require("./Node");

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size += 1;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      this.size += 1;
      current.next = newNode;
    }
  }

  addRecursively(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.size += 1;
    } else {
      let current = this.head;
      this._addRecursively(current, newNode);
    }
  }

  _addRecursively(node, newNode) {
    if (node.next === null) {
      node.next = newNode;
      this.size += 1;
    } else {
      this._addRecursively(node.next, newNode);
    }
  }

  addAt(data, index) {
    const newNode = new Node(data);
    if (index > -1) {
      if (this.head === null) {
        this.head = newNode;
        this.size += 1;
        return newNode.data;
      }

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size += 1;
        return newNode.data;
      }

      if (index === this.size) {
        let current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        this.size += 1;
        current.next = newNode;
        return newNode.data;
      }

      let current = this.head;
      let previous = null;
      let currentIndex = 0;
      while (current !== null && currentIndex < index) {
        previous = current;
        currentIndex += 1;
        current = current.next;
      }
      if (current !== null) {
        previous.next = newNode;
        newNode.next = current;
        this.size += 1;
        return newNode.data;
      }
    }
    throw new RangeError(`Index ${index} does not exist in the list.`);
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

  getRecursively(index) {
    if (index > -1) {
      return this._getRecursively(this.head, 0, index);
    }
    return undefined;
  }
  _getRecursively(node, currentIndex, index) {
    if (node !== null && currentIndex < index) {
      currentIndex += 1;
      node = node.next;
    } else {
      return node ? node.data : undefined;
    }
    return this._getRecursively(node, currentIndex, index);
  }

  remove(index) {
    if (this.head === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    if (index === 0) {
      const removedData = this.head.data;
      this.head = this.head.next;
      this.size -= 1;
      return removedData;
    }
    let current = this.head;
    let previous = null;
    let currentIndex = 0;
    while (current !== null && currentIndex < index) {
      previous = current;
      currentIndex += 1;
      current = current.next;
    }
    if (current !== null) {
      previous.next = current.next;
      this.size -= 1;
      return current.data;
    }
    throw new RangeError(`Index ${index} does not exist in the list.`);
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
          .join("->")
      : "empty";
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return prev;
  }

  reverseRecursively() {
    this.head = this._reverseRecursively(null, this.head, null);
  }

  _reverseRecursively(prevNode, node, nextNode) {
    if (node !== null) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    } else {
      return prevNode;
    }
    return this._reverseRecursively(prevNode, node, nextNode);
  }

  middle() {
    if (this.head === null) {
      return this.head;
    }
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  getNthFromEnd(nth) {
    let current = this.head;
    let result = this.head;
    let currentIndex = 0;
    while (current !== null) {
      if (currentIndex > nth) {
        result = result.next;
      }
      current = current.next;
      currentIndex += 1;
    }
    return result.data;
  }

  copyList() {
    const clonedList = new LinkedList();
    if (this.head == null) {
      return null;
    }
    let current = this.head;
    const cloneMap = new Map();
    while (current !== null) {
      cloneMap.set(current, new Node(current.data));
      current = current.next;
      clonedList.size += 1;
    }

    current = this.head;
    while (current !== null) {
      cloneMap.get(current).next = cloneMap.get(current.next);
      current = current.next;
    }
    clonedList.head = cloneMap.get(this.head);
    return clonedList;
  }

  *values() {
    let current = this.head;

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
};
