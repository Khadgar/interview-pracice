// https://leetcode.com/discuss/interview-question/356960

var twoSum = function(nums, target) {
  target -= 30;
  const map = {};
  const result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    map[target - nums[i]] = i;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined && i !== map[nums[i]]) {
      if (nums[i] > max) {
        max = nums[i];
        maxIndex = i;
      }
      result[0] = map[nums[maxIndex]];
      result[1] = maxIndex;
    }
  }
  return result;
};

const nums_1 = [1, 10, 25, 35, 60];
const target_1 = 90;
const nums_2 = [20, 50, 40, 25, 30, 10];
const target_2 = 90;

console.log(twoSum(nums_1, target_1));
console.log(twoSum(nums_2, target_2));
