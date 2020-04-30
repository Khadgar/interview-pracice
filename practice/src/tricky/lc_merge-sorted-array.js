/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let k = m + n - 1; // end index
  let i = m - 1; // end index of num1
  let j = n - 1; // end index of num2
  while (j >= 0 && i >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }

  // if all the elements in num2 larger than element is num1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
console.log(nums2);

const nums3 = [4, 5, 6, 0, 0, 0];
const m2 = 3;
const nums4 = [1, 2, 3];
const n2 = 3;

merge(nums3, m2, nums4, n2);
console.log(nums3);
console.log(nums4);

const nums5 = [1, 2, 4, 5, 6, 0];
const m3 = 5;
const nums6 = [3];
const n3 = 1;

merge(nums5, m3, nums6, n3);
console.log(nums5);
console.log(nums6);
