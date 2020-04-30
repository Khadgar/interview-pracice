// https://leetcode.com/problems/open-the-lock/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let start = '0000';
  if (target === start) {
    return 0;
  }
  const deadEnds = new Set(deadends);
  const visited = new Set();
  visited.add('0000');
  const queue = [];
  queue.push('0000');
  let lvl = 0;
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentLock = queue.shift();
      if (deadEnds.has(currentLock)) {
        continue;
      }

      if (currentLock === target) {
        return lvl;
      }
      for (let j = 0; j < 4; j++) {
        let currentLockPosition = currentLock[j];
        let s1 = currentLock.substring(0, j) + (currentLockPosition === '9' ? 0 : Number(currentLockPosition) + 1) + currentLock.substring(j + 1);
        let s2 = currentLock.substring(0, j) + (currentLockPosition === '0' ? 9 : Number(currentLockPosition) - 1) + currentLock.substring(j + 1);

        if (!visited.has(s1) && !deadEnds.has(s1)) {
          queue.push(s1);
          visited.add(s1);
        }
        if (!visited.has(s2) && !deadEnds.has(s2)) {
          queue.push(s2);
          visited.add(s2);
        }
      }
    }
    lvl++;
  }
  return -1;
};

const deadends = ['0201', '0101', '0102', '1212', '2002'],
  target = '0202';
console.log(openLock(deadends, target)); //6

const deadends2 = ['8888'],
  target2 = '0009';
console.log(openLock(deadends2, target2)); //1

const deadends3 = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  target3 = '8888';
console.log(openLock(deadends3, target3)); //-1

const deadends4 = ['0000'],
  target4 = '8888';
console.log(openLock(deadends4, target4)); //-1
