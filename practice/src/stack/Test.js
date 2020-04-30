const Stack = require("./Stack");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.toString());
console.log("remove", stack.pop().data);
console.log(stack.toString());
console.log("remove", stack.pop().data);
console.log(stack.toString());

console.log("remove", stack.pop().data);
console.log(stack.toString());

console.log("remove", stack.pop());
console.log("remove", stack.pop());
console.log("remove", stack.pop());


console.log(stack.toString());
