/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 2 pointer method
var minWindow = function(s, t) {
  const requiredChars = createMapOfOccurances(t);
  const windowCharMapping = {};
  let left = 0;
  let right = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let ret = '';
  let totalCharFrequenciesToMatch = Object.values(requiredChars).length;
  let charFrequenciesInWindowThatMatch = 0;
  while (right < s.length) {
    const characterAtRightPointer = s[right];
    if (windowCharMapping[characterAtRightPointer]) {
      windowCharMapping[characterAtRightPointer]++;
    } else {
      windowCharMapping[characterAtRightPointer] = 1;
    }
    if (requiredChars[characterAtRightPointer]) {
      const requirementForCharacterMet = requiredChars[characterAtRightPointer] === windowCharMapping[characterAtRightPointer];
      if (requirementForCharacterMet) {
        charFrequenciesInWindowThatMatch++;
      }
    }
    while (charFrequenciesInWindowThatMatch == totalCharFrequenciesToMatch && left <= right) {
      const characterAtLeftPointer = s[left];
      let windowSize = right - left + 1;

      if (windowSize < min) {
        min = windowSize;
        ret = s.substring(left, right + 1);
      }

      windowCharMapping[characterAtLeftPointer] = windowCharMapping[characterAtLeftPointer] - 1;

      const leftCharIsARequirement = requiredChars[characterAtLeftPointer];
      if (leftCharIsARequirement) {
        const characterFailsRequirement = windowCharMapping[characterAtLeftPointer] < requiredChars[characterAtLeftPointer];

        if (characterFailsRequirement) {
          charFrequenciesInWindowThatMatch--;
        }
      }

      left++;
    }
    right++;
  }
  return ret;
};

var createMapOfOccurances = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  return map;
};

// Bruteforce
// var minWindow = function(s, t) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let ret = '';
//   for(let i=0;i<s.length;i++){
//     for(let j=i;j<s.length;j++){
//       const w = s.substring(i,j+1);
//       if(stringContainsAllCharacters(w,t)){
//         if(w.length<min){
//           ret = w;
//           min=w.length;
//         }
//       }
//     }
//   }
//   return ret;
// };

// var stringContainsAllCharacters = function(searchString, t) {
//   const map = {};
//   for (let i = 0; i < t.length; i++) {
//     if (map[t[i]]) {
//       map[t[i]]++;
//     } else {
//       map[t[i]] = 1;
//     }
//   }
//   for (let i = 0; i < searchString.length; i++) {
//     if (map[searchString[i]]) {
//       const newOccurence = map[searchString[i]] - 1;

//       if (newOccurence === 0) {
//         delete map[searchString[i]];
//       } else {
//         map[searchString[i]] = newOccurence;
//       }
//     }
//   }
//   return Object.values(map).length === 0 ? true : false;
// };
