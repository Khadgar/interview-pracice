var climbStairs = function(n) {
  const memory = [];
  let result = memo(n, memory);
  return result;
};

var memo = function(n, memory) {
  if (memory[n]) {
    return memory[n];
  }
  if (n <= 2) {
    return n;
  }
  const result = memo(n - 1, memory) + memo(n - 2, memory);
  memory[n] = result;
  return result;
};

console.log(climbStairs(46));
