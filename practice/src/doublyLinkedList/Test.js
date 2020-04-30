const DoublyLinkedList = require("./DoublyLinkedList");
const doublyLinkedList = new DoublyLinkedList();
const emptyDoublyLinkedList = new DoublyLinkedList();
console.log("DoublyLinkedList test functions add: 10<=>20<=>30");
doublyLinkedList.add(10);
doublyLinkedList.add(20);
doublyLinkedList.add(30);
console.log(doublyLinkedList.toString());
console.log("Reverse print:", doublyLinkedList.toStringReverse());

console.log(doublyLinkedList.get(0));
console.log(doublyLinkedList.get(1));
console.log(doublyLinkedList.get(2));
console.log(doublyLinkedList.get(3));
console.log("DoublyLinkedList reverse");
doublyLinkedList.reverse();
console.log(doublyLinkedList.toString());
console.log("Reverse print:", doublyLinkedList.toStringReverse());
console.log(emptyDoublyLinkedList.toString());
emptyDoublyLinkedList.reverse();
console.log(emptyDoublyLinkedList.toString());

