/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const result = [];
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  if (digits.length === 0) {
    return [];
  }

  backtrack('', digits, digitMap, result);
  return result;
};

var backtrack = function(combination, nextDigits, digitsMap, result) {
  if (nextDigits.length === 0) {
    result.push(combination);
    return;
  }
  const currentDigit = nextDigits[0];
  const letters = digitsMap[currentDigit];
  for (let i = 0; i < letters.length; i++) {
    const letter = digitsMap[currentDigit].substring(i, i + 1);
    backtrack(combination + letter, nextDigits.substring(1), digitsMap, result);
  }
};

console.log(letterCombinations('23'));
