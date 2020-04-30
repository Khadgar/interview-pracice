/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const colors = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (colors.has(nums[i])) {
      colors.set(nums[i], colors.get(nums[i]) + 1);
    } else {
      colors.set(nums[i], 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (colors.get(0) > 0) {
      nums[i] = 0;
      colors.set(0, colors.get(0) - 1);
    } else if (colors.get(1) > 0) {
      nums[i] = 1;
      colors.set(1, colors.get(1) - 1);
    } else if (colors.get(2) > 0) {
      nums[i] = 2;
      colors.set(2, colors.get(2) - 1);
    }
  }
};
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums)); //[0,0,1,1,2,2]
console.log(nums);
