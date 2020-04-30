// https://leetcode.com/problems/shortest-distance-to-a-character/
// Given a string. Find distance of all characters from a target character. For example, "Google", target character= 'g', then result will be [0,1,1,0,1,2]

var findDistanceFromTarget = function(string, target) {
  const result = new Array(string.length);
  let distance = 10000;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      result[i] = 0;
      distance = 0;
    } else {
      result[i] = ++distance;
    }
  }
  distance = 10000;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === target) {
      distance = 0;
    } else if (result[i] > distance) {
      result[i] = ++distance;
    }
  }

  return result;
};

console.log(findDistanceFromTarget('google', 'g')); // [0,1,1,0,1,2]
console.log(findDistanceFromTarget('loveleetcode', 'e')); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
