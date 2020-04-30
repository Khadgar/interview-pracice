var urlify = function(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '%20';
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(urlify('Mr John Smith'));
