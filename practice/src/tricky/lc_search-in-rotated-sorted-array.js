//https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // find pivot

  let pivot = findPivot(nums, 0, nums.length - 1, target);
  let left = binarySearch(nums, 0, pivot - 1, target);
  let right = binarySearch(nums, pivot, nums.length - 1, target);
  if (left >= 0) {
    return left;
  }
  if (right >= 0) {
    return right;
  }
  return -1;
};

var findPivot = function(nums, l, r) {
  while (l < r) {
    let middle = Math.floor((l + r) / 2);
    if (nums[r] < nums[middle]) {
      l = middle + 1;
    }
    if (nums[middle] < nums[r]) {
      r = middle;
    }
  }
  return l;
};

var binarySearch = function(nums, l, r, target) {
  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (target === nums[middle]) {
      return middle;
    }
    if (target > nums[middle]) {
      l = middle + 1;
    }
    if (target < nums[middle]) {
      r = middle - 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //Output: 4
console.log(search([2, 4, 5, 6, 7, 0, 1], 4)); //Output: 4
console.log(search([7, 0, 1, 2, 4, 5, 6], 0)); //Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); //Output: -1
console.log(search([4, 5, 6, 0, 1, 2], 3)); //Output: -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
console.log(search([1, 3, 5], 3));
console.log(search([3, 5, 1], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
