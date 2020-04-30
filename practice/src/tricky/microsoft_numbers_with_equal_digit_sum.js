// https://leetcode.com/discuss/interview-question/365872/

var solution = function (nums) {
  const map = {};
  let maxSum = -1;
  for (let i = 0; i < nums.length; i++) {
    const sum = sumDigits(nums[i]);
    if (map[sum] === undefined) {
      map[sum] = nums[i];
      continue;
    }
    maxSum = Math.max(maxSum, nums[i] + map[sum]);
    if (nums[i] > map[sum]) {
      map[sum] = nums[i];
    }
  }
  console.log(map);
  return maxSum;
};

var sumDigits = function (num) {
  return `${num}`.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
};

console.log(solution([51, 71, 17, 42])); //=>93   (51,42)=93 (17,71)=88

console.log(solution([42, 33, 60])); //=>102

console.log(solution([51, 32, 43])); //=>-1
