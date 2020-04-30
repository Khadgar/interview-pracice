var repeatedString = function(s, n) {
  // const repeat = n <= s.length ? 1 : Math.floor(n / s.length);
  // const carry = n % s.length;
  // const result = n <= s.length ? s.substring(0, n) : s.repeat(repeat) + s.substring(0, carry);
  // return result.split('').filter(c => c === 'a').length;

  const repeat = n <= s.length ? 1 : Math.floor(n / s.length);
  const carry = n % s.length;
  const numberOfA = s
    .substring(0, n < s.length ? n : s.length)
    .split('')
    .filter(c => c === 'a').length;
  const extraA = s
    .substring(0, carry)
    .split('')
    .filter(c => c === 'a').length;
  return numberOfA * repeat + (n < s.length ? 0 : extraA);
};

console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
console.log(repeatedString('ababa', 3));
