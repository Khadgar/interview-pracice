/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const counts = [];
  const result = [];
  let res = '';
  let index = 0;
  while (index < s.length) {
    // check if the character is number
    if (!isNaN(Number(s[index]))) {
      let count = '';
      while (!isNaN(Number(s[index]))) {
        //number larger than 9
        count += s[index];
        index++;
      }
      counts.push(Number(count));
    } else if (s[index] === '[') {
      result.push(res);
      res = '';
      index++;
    } else if (s[index] === ']') {
      let temp = result.pop();
      let count = counts.pop();
      for (let i = 0; i < count; i++) {
        temp += res;
      }
      res = temp;
      index++;
    } else {
      res += s[index];
      index++;
    }
  }
  return res;
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
