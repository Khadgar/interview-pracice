/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  backtrack('', 0, 0, result, n);
  return result;
};

var backtrack = function(combination, open, close, result, max) {
  if (combination.length === max * 2) {
    result.push(combination);
  }
  if (open < max) backtrack(combination + '(', open + 1, close, result, max);
  if (close < open) backtrack(combination + ')', open, close + 1, result, max);
};

console.log(generateParenthesis(3));
