/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  backtrack(nums, [], result);
  return result;
};

var backtrack = function(nums, set, result) {
  if (nums.length === 0) {
    result.push([...set]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((el, index) => index != i);
    set.push(nums[i]);
    backtrack(newNums, set, result);
    set.pop();
  }
};

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

console.log(permute([1, 2, 3]));
