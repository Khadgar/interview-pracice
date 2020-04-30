// Complete the sherlockAndAnagrams function below.
var sherlockAndAnagrams = function(s) {
  let counter = 0;
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    if (dict[temp]) {
      temp = temp;
      dict[temp]++;
    } else {
      dict[temp] = 1;
    }
    for (let j = i + 1; j < s.length; j++) {
      temp += s[j];
      temp = temp
        .split('')
        .sort()
        .join('');
      if (dict[temp]) {
        dict[temp]++;
      } else {
        dict[temp] = 1;
      }
    }
  }
  for (let a in dict) {
    if (dict[a] > 1) {
      let temp = (dict[a] * (dict[a] - 1)) / 2; //(n*(n-1))/2
      counter += temp;
    }
  }
  return counter;
};
//.split('').sort().join('')
// console.log(sherlockAndAnagrams('mom')); //4
// console.log(sherlockAndAnagrams('abba')); //4
// console.log(sherlockAndAnagrams('abcd')); //0
// console.log(sherlockAndAnagrams('ifailuhkqq')); //3
//console.log(sherlockAndAnagrams('cdcd')); //3

console.log(sherlockAndAnagrams('kkkk')); //10
