/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  return canJumpFromPosition(0, nums);
};

var canJumpFromPosition = function(position, arr) {
  if (position === arr.length - 1) {
    return true;
  }
  const furthestJump = Math.min(position + nums[position], arr.length - 1);
  for (let i = position + 1; i <= furthestJump; i++) {
    if (canJumpFromPosition(i, arr)) {
      return true;
    }
  }
  return false;
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([1]));
// console.log(canJump([1, 2, 3]));
console.log(canJump([1, 0, 1, 0]));
