const Node = require('./Node');
const Queue = require('../queue/Queue');

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insert(this.root, newNode);
    }
  }

  _insert(node, newNode) {
    if (newNode.data >= node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insert(node.left, newNode);
      }
    }
  }

  find(data) {
    if (this.root === null) {
      return undefined;
    } else {
      return this._find(this.root, null, data);
    }
  }

  _find(node, parentNode, data) {
    if (node === null) {
      return { node, parentNode };
    } else if (data >= node.data) {
      if (data === node.data) {
        return { node, parentNode };
      }
      return this._find(node.right, node, data);
    } else {
      if (data === node.data) {
        return { node, parentNode };
      }
      return this._find(node.left, node, data);
    }
  }

  remove(data) {
    const nodeToRemove = this.find(data);
    const isLeftNode = this.isLeftNode(nodeToRemove.parentNode, data);
    console.log(nodeToRemove.node ? `Node to remove: ${nodeToRemove.node.data}` : `Node to remove: ${null}`, nodeToRemove.parentNode ? `Parent Node: ${nodeToRemove.parentNode.data}` : `Parent Node: ${null}`);

    // If the node exists
    if (nodeToRemove.node !== null) {
      // Node to be removed has no children.
      if (nodeToRemove.node.left === null && nodeToRemove.node.right === null) {
        if (isLeftNode) {
          nodeToRemove.parentNode.left = null;
        } else {
          nodeToRemove.parentNode.right = null;
        }
        return nodeToRemove.node;
      }
      // Node to be removed has one child.
      if (nodeToRemove.node.left === null || nodeToRemove.node.right === null) {
        if (isLeftNode) {
          nodeToRemove.parentNode.left = nodeToRemove.node.left || nodeToRemove.node.right;
        } else {
          nodeToRemove.parentNode.right = nodeToRemove.node.left || nodeToRemove.node.right;
        }
        return nodeToRemove.node;
      }
      // Node to be removed has two children.
      if (nodeToRemove.node.left && nodeToRemove.node.right) {
        const minValueInRightSubtree = this.findMinNode(nodeToRemove.node.right);
        if (isLeftNode) {
          nodeToRemove.parentNode.left = minValueInRightSubtree.node;
        } else {
          nodeToRemove.parentNode.right = minValueInRightSubtree.node;
        }
        minValueInRightSubtree.parentNode.left = null;
        minValueInRightSubtree.node.left = nodeToRemove.node.left;
        minValueInRightSubtree.node.right = nodeToRemove.node.right;
        return nodeToRemove.node;
      }
    }
  }

  isLeftNode(node, data) {
    if (node.left && node.left.data === data) {
      return true;
    }
    return false;
  }

  getMaximumDepth() {
    if (this.root === null) {
      return 0;
    } else {
      return this._getMaximumDepth(this.root);
    }
  }

  _getMaximumDepth(node) {
    if (node === null) {
      return 0;
    } else {
      const left = this._getMaximumDepth(node.left);
      const right = this._getMaximumDepth(node.right);
      return Math.max(left, right) + 1;
    }
  }

  getMinimumDepth() {
    if (this.root === null) {
      return 0;
    } else {
      return this._getMinimumDepth(this.root);
    }
  }

  _getMinimumDepth(node) {
    if (node === null) {
      return 0;
    } else {
      const left = this._getMinimumDepth(node.left);
      const right = this._getMinimumDepth(node.right);
      return Math.min(left, right) + 1;
    }
  }

  printLevelOrder() {
    const queue = [];
    const levelOrder = [];
    if (this.root === null) {
      return null;
    } else {
      queue.unshift(this.root);
      while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
          let currentNode = queue.pop();
          levelOrder.push(currentNode);
          if (currentNode.left !== null) {
            queue.unshift(currentNode.left);
          }

          if (currentNode.right !== null) {
            queue.unshift(currentNode.right);
          }
        }
      }
      return levelOrder.map(el => el.data);
    }
  }

  printLevelOrder() {
    const queue = new Queue();
    const levelOrder = [];
    if (this.root === null) {
      return null;
    } else {
      queue.enqueue(this.root);
      while (!queue.isEmpty()) {
        const levelItemNumber = queue.length();
        for (let i = 0; i < levelItemNumber; i++) {
          let currentNode = queue.dequeue().data;
          levelOrder.push(currentNode);
          if (currentNode.left !== null) {
            queue.enqueue(currentNode.left);
          }

          if (currentNode.right !== null) {
            queue.enqueue(currentNode.right);
          }
        }
      }
      return levelOrder.map(el => el.data);
    }
  }

  printLeftView() {
    const queue = new Queue();
    const levelOrder = [];
    if (this.root === null) {
      return null;
    } else {
      queue.enqueue(this.root);
      while (!queue.isEmpty()) {
        const levelItemNumber = queue.length();
        for (let i = 0; i < levelItemNumber; i++) {
          let currentNode = queue.dequeue().data;
          if (i === 0) {
            levelOrder.push(currentNode);
          }
          if (currentNode.left !== null) {
            queue.enqueue(currentNode.left);
          }
          if (currentNode.right !== null) {
            queue.enqueue(currentNode.right);
          }
        }
      }
    }
    return levelOrder.map(l => l.data);
  }

  printRightView() {
    const queue = new Queue();
    const levelOrder = [];
    if (this.root === null) {
      return null;
    } else {
      queue.enqueue(this.root);
      while (!queue.isEmpty()) {
        const levelItemNumber = queue.length();
        for (let i = 0; i < levelItemNumber; i++) {
          let currentNode = queue.dequeue().data;
          if (i === 0) {
            levelOrder.push(currentNode);
          }
          if (currentNode.right !== null) {
            queue.enqueue(currentNode.right);
          }
          if (currentNode.left !== null) {
            queue.enqueue(currentNode.left);
          }
        }
      }
    }
    return levelOrder.map(l => l.data);
  }

  isBalanced() {
    if (this.root === null) {
      return true;
    } else {
      return this._isBalanced(this.root).balanced;
    }
  }

  _isBalanced(node) {
    if (node === null) {
      return { balanced: true, height: -1 };
    } else {
      const leftResult = this._isBalanced(node.left);
      if (!leftResult.balanced) {
        return leftResult; // Left subtree is not balanced. Bubble up failure.
      }
      const rightResult = this._isBalanced(node.right);
      if (!rightResult.balanced) {
        return rightResult; // Left subtree is not balanced. Bubble up failure.
      }
      return { balanced: Math.abs(leftResult.height - rightResult.height) <= 1, height: Math.max(leftResult.height, rightResult.height) + 1 };
    }
  }

  findMinNode(node, parentNode) {
    if (node.left === null) return { node, parentNode };
    else return this.findMinNode(node.left, node);
  }

  preorder() {
    return this._preorder(this.root, []);
  }

  _preorder(node, arr) {
    if (node !== null) {
      arr.push(node.data);
      this._preorder(node.left, arr);
      this._preorder(node.right, arr);
    }
    return arr;
  }

  inorder() {
    return this._inorder(this.root, []);
  }

  _inorder(node, arr) {
    if (node !== null) {
      this._inorder(node.left, arr);
      arr.push(node.data);
      this._inorder(node.right, arr);
    }
    return arr;
  }

  postorder() {
    return this._postorder(this.root, []);
  }

  _postorder(node, arr) {
    if (node !== null) {
      this._postorder(node.left, arr);
      this._postorder(node.right, arr);
      arr.push(node.data);
    }
    return arr;
  }
};
