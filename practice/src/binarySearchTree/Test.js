const BinarySearchTree = require('./BinarySearchTree');

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(54);
binarySearchTree.insert(29);
binarySearchTree.insert(63);
binarySearchTree.insert(21);
binarySearchTree.insert(38);
binarySearchTree.insert(35);
binarySearchTree.insert(44);
binarySearchTree.insert(40);

console.log('inorder', binarySearchTree.inorder());
console.log('preorder', binarySearchTree.preorder());
console.log('postorder', binarySearchTree.postorder());
console.log('find');
console.log(21, binarySearchTree.find(21));
console.log(54, binarySearchTree.find(54));
console.log(38, binarySearchTree.find(38));
console.log(63, binarySearchTree.find(63));
console.log(100, binarySearchTree.find(100));
console.log('remove');
console.log('findParentNodeof 38', binarySearchTree.find(38));
console.log('remove');
binarySearchTree.remove(38);
console.log(binarySearchTree.find(40));
console.log(binarySearchTree.getMaximumDepth());
console.log(binarySearchTree.getMinimumDepth());
console.log('levelorder', binarySearchTree.printLevelOrder());
console.log('leftView', binarySearchTree.printLeftView());
console.log('rightView', binarySearchTree.printRightView());
console.log('isBalanced', binarySearchTree.isBalanced());
binarySearchTree.insert(60);
binarySearchTree.insert(65);
binarySearchTree.insert(66);

console.log('isBalanced', binarySearchTree.isBalanced());
