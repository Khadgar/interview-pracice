var palindromePermutation = function(s) {
  const sorted = s
    .split('')
    .sort()
    .join('');
};

console.log(palindromePermutation('tact coa'));
