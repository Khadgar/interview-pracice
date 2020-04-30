/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ret = [];
  nums = nums.sort((a, b) => a - b);
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
          while (nums[low] === nums[low - 1]) low++;
          while (nums[high] === nums[high + 1]) high--;
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

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
