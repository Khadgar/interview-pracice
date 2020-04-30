// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ret = [];
  nums = nums.sort();
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = 0 - nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          ret.push([nums[i], nums[low], nums[high]]);
          low++;
          high--;
        } else if (nums[low] + nums[high] > sum) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return ret;
};

var twoSum = function(nums) {
  const ret = [];
  nums = nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i;
      let high = nums.length - 1;
      while (low < high) {
        if (nums[low] + nums[high] === 0) {
          ret.push([nums[low], nums[high]]);
          low++;
          high--;
        } else if (nums[low] + nums[high] > 0) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return ret;
};

const nums = [-1, 0, 1, 2, -1, -4, -2];
console.log(threeSum(nums)); //
console.log(twoSum(nums));
