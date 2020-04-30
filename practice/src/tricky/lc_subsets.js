/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  backtrack(nums, [], result, 0);
  return result;
};

var backtrack = function(nums, set, result, start) {
  result.push([...set]);
  for (let i = start; i < nums.length; i++) {
    set.push(nums[i]);
    backtrack(nums, set, result, i + 1);
    set.pop();
  }
};

console.log(subsets([1, 2, 3]));
