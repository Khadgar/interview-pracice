const LinkedList = require("./LinkedList");
const { mergeSortedLists, sort, sortRewire } = require("./utils");
// Tricks: pointer manipulation, travesal trics

const linkedList = new LinkedList();
console.log("SingleLinkedList test functions add: 10->20->30");
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add("dani");

console.log(linkedList.toString());
console.log("SingleLinkedList get elements");
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.get(3));
console.log(linkedList.get(-1));
console.log("SingleLinkedList remove elements");
linkedList.remove(1);
console.log(linkedList.toString());

console.log("SingleLinkedList add element to position");
linkedList.addAt("korte", 0);
console.log(linkedList.toString());
linkedList.addAt("alma", 1);
console.log(linkedList.toString());
linkedList.addAt("barack", 3);
console.log(linkedList.toString());
linkedList.addAt("szilva", 5);
console.log(linkedList.toString());
const array1 = [...linkedList.values()];
console.log(array1);
linkedList.reverse();
const reversed = [...linkedList.values()];
console.log(reversed);
linkedList.reverse();
console.log(linkedList.toString());
linkedList.reverse();
console.log(linkedList.toString());
linkedList.add("dani");
linkedList.add("dani");
linkedList.add("dani");
console.log(linkedList.toString());

console.log("Middle", linkedList.middle() ? linkedList.middle().data : "null");
console.log(linkedList.getNthFromEnd(3));

const L1 = new LinkedList();
L1.add(40);
L1.add(20);
L1.add(30);
L1.add(100);
L1.add(1);
L1.add(90);
console.log(L1.toString());
sortRewire(L1);
console.log(L1.toString());

const recursiveLinkedList = new LinkedList();
recursiveLinkedList.addRecursively(10);
recursiveLinkedList.addRecursively(20);
recursiveLinkedList.addRecursively(30);
recursiveLinkedList.addRecursively(40);
console.log(
  "recursiveLinkedList",
  recursiveLinkedList.toString(),
  recursiveLinkedList.size
);
console.log(recursiveLinkedList.getRecursively(-1));
console.log(recursiveLinkedList.getRecursively(0));
console.log(recursiveLinkedList.getRecursively(1));
console.log(recursiveLinkedList.getRecursively(2));
console.log(recursiveLinkedList.getRecursively(3));
console.log(recursiveLinkedList.getRecursively(4));
recursiveLinkedList.reverseRecursively();
console.log(recursiveLinkedList.toString());


const clonedList = recursiveLinkedList.copyList();

console.log(clonedList===recursiveLinkedList)

