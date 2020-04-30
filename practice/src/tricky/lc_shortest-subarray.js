//https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
  const subArrays = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let arr = [];
      for (let k = i; k <= j; k++) {
        arr.push(A[k]);
      }
      let sum = arr.reduce((acc, curr) => acc + curr, 0);
      subArrays.push({ sum, l: arr.length });
    }
  }
  const results = subArrays.filter(el => el.sum >= K);
  if (results.length === 0) {
    return -1;
  }
  return Math.min(...results.map(r => r.l));
};

console.log(shortestSubarray([1], 1)); //1

console.log(shortestSubarray([1, 2], 4)); //-1

console.log(shortestSubarray([2, -1, 2], 3)); //3
