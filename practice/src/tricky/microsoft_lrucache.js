/**
 * @param {number} capacity
 */
var Node = function (key, value, prev = null, next = null) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
};

var LRUCache = function (capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const item = this.cache[key];
  if (item) {
    const value = this.cache[key].value;
    this.remove(key);
    this.put(key, item.value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key].value = value;
    this.get(key);
  } else {
    this.ensureLimit();
    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, null, this.head);
      this.head.prev = node;
      this.head = node;
    }
    //Update the cache map
    this.cache[key] = this.head;
    this.size++;
  }
};

LRUCache.prototype.ensureLimit = function () {
  if (this.size === this.capacity) {
    this.remove(this.tail.key);
  }
};

LRUCache.prototype.remove = function (key) {
  const node = this.cache[key];

  if (node.prev !== null) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }

  if (node.next !== null) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }

  delete this.cache[key];
  this.size--;
};

LRUCache.prototype.map = function (func) {
  let curr = this.head;
  const arr = [];
  while (curr !== null) {
    arr.push(func(curr));
    curr = curr.next;
  }
  return arr;
};

const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.put(5, 5);
cache.get(3);
const arr = cache.map((el) => {
  return { key: el.key, value: el.value };
});

console.log(arr);

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
