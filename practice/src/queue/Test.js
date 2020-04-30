const Queue = require("./Queue");
const QueueWithStack = require("./QueueWithStack");

const queue = new Queue();

console.log("queue implemented with linked list");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Queue:", queue.toString());
// console.log("Queue Reverse", queue.toStringFromTail());
console.log("head", queue.head.data);
console.log("tail", queue.tail.data);
console.log("remove", queue.dequeue().data);
console.log("Queue:", queue.toString(), "new tail", queue.tail.data);
// console.log("Queue Reverse", queue.toStringFromTail());

console.log("queue implemented with stacks");
const queueWithStack = new QueueWithStack();
queueWithStack.enqueue(10);
queueWithStack.enqueue(20);
queueWithStack.enqueue(30);
queueWithStack.enqueue(40);
queueWithStack.enqueue(50);
console.log("QueueWithStack:", queueWithStack.toString());
console.log("remove", queueWithStack.dequeue().data);
console.log("QueueWithStack:", queueWithStack.toString());

queueWithStack.enqueue(10);
console.log("QueueWithStack:", queueWithStack.toString());
console.log("remove", queueWithStack.dequeue().data);
console.log("QueueWithStack:", queueWithStack.toString());
console.log("remove", queueWithStack.dequeue().data);
console.log("QueueWithStack:", queueWithStack.toString());
