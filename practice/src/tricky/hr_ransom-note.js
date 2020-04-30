var checkMagazine = function(magazine, note) {
  const mag = {};
  for (let i = 0; i < magazine.length; i++) {
    if (mag[magazine[i]]) {
      mag[magazine[i]]++;
    } else {
      mag[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < note.length; i++) {
    if (!mag[note[i]]) {
      return 'No';
    }
    if (mag[note[i]] === 0) {
      return 'No';
    } else {
      mag[note[i]]--;
    }
  }
  return 'Yes';
};

console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])); // Yes
console.log(checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])); // No
