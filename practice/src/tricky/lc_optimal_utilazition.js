// https://leetcode.com/discuss/interview-question/373202
// Example 1
// Input
// a = [[1, 2], [2, 4], [3, 6]]
// b = [[1, 2]]
// target = 7

// Output: [[2, 1]]

// Example 2
// Input:
// a = [[1, 3], [2, 5], [3, 7], [4, 10]]
// b = [[1, 2], [2, 3], [3, 4], [4, 5]]
// target = 10

// Output: [[2, 4], [3, 2]]

// Example 3
// Input:
// a = [[1, 8], [2, 7], [3, 14]]
// b = [[1, 5], [2, 10], [3, 14]]
// target = 20

// Output: [[3, 1]]

// Example 4
// Input:
// a = [[1, 8], [2, 15], [3, 9]]
// b = [[1, 8], [2, 11], [3, 12]]
// target = 20

// Output: [[1, 3], [3, 2]]

/**
 * @param {number[][]} a
 * @param {number[][]} b
 * @param {number} target
 * @return {number[][]}
 */
var optimalUtilization = function(a, b, target) {
  const result = { optimal: [], below: [] };

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (target - (a[i][1] + b[j][1]) > 0 && target - (a[i][1] + b[j][1]) <= 1) {
        result.below.push([a[i][0], b[j][0]]);
      }
      if (target - (a[i][1] + b[j][1]) === 0) {
        result.optimal.push([a[i][0], b[j][0]]);
      }
    }
  }

  return result.optimal.length > 0 ? result.optimal : result.below;
};

const a1 = [
  [1, 2],
  [2, 4],
  [3, 6],
];
const b1 = [
  [1, 2],
  [2, 5],
  [3, 6],
  [4, 7],
];
console.log('Example 1', optimalUtilization(a1, b1, 7)); // Output: [[2, 1]]

const a2 = [
  [1, 3],
  [2, 5],
  [3, 7],
  [4, 10],
];
const b2 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
console.log('Example 2', optimalUtilization(a2, b2, 10)); // Output: [[2, 4], [3, 2]]

const a3 = [
  [1, 8],
  [2, 7],
  [3, 14],
];
const b3 = [
  [1, 5],
  [2, 10],
  [3, 14],
];
console.log('Example 3', optimalUtilization(a3, b3, 20)); // Output: [[3, 1]]

const a4 = [
  [1, 8],
  [2, 15],
  [3, 9],
];
const b4 = [
  [1, 8],
  [2, 11],
  [3, 12],
];
console.log('Example 4', optimalUtilization(a4, b4, 20)); // Output: [[1, 3], [3, 2]]
