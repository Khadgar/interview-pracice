//https://leetcode.com/problems/repeated-substring-pattern/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let subString = '';
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    subString += s[i];
    let temp = '';
    while (temp.length <= s.length) {
      temp += subString;
      if (temp === s) {
        return true;
      }
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abab')); //true
console.log(repeatedSubstringPattern('aba')); //false
console.log(repeatedSubstringPattern('abcabcabcabc')); //true
console.log(repeatedSubstringPattern('ababab')); //true
