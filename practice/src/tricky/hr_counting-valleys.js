countingValleys = function(n, s) {
  let lvl = 0;
  let counter = 0;
  let prevLvl = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 'D') {
      lvl--;
      if (prevLvl === 0 && lvl < 0) {
        counter++;
      }
    } else {
      lvl++;
    }
    prevLvl = lvl;
  }
  return counter;
};

console.log(countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])); //1
