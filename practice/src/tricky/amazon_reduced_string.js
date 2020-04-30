// https://leetcode.com/discuss/interview-question/406092/Amazon-or-Phone-Screen-or-Reduced-String
// Given a string return a reduced string such that , the reduced string has the characters re-arranged

// in order of characters having highest frequencey
// followed by character which appears just once in the same order as in the original string
// and no duplicate characters

// Input: "hello world"
// Output: "lohe wrd"
// Explaination: 'l' appears thrice, 'o' appears twice, 'h','e', ' '(space) ,'w','r','d' all appear once
// 'h','e',' ','w','r','d' should be appended in the same order as they appear in the original string  hello world

var reduceString = function(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = { char: str[i], count: 1, origIndex: i };
    } else {
      map[str[i]].count++;
    }
  }

  const values = Object.values(map);
  const orderedValues = values.sort((a, b) => {
    if (a.count === b.count) {
      return a.origIndex - b.origIndex;
    }
    return b.count - a.count;
  });
  return orderedValues.map(el => el.char).join('');
};

console.log(reduceString('hello world'));
