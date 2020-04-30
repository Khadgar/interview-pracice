/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const s = `${x}`;
  let l = 0;
  let r = s.length-1;
  while(l<r){
      if(s[l]!==s[r]){
          return false;
      }
      l++;
      r--;
  }
  return true;
};
// @lc code=end
