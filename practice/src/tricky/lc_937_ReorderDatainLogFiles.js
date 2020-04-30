//https://leetcode.com/problems/reorder-data-in-log-files/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const letterLogs = logs.filter(el =>
    el
      .split(' ')
      .slice(1)
      .every(e => isNaN(Number(e))),
  );
  const digitLogs = logs.filter(el =>
    el
      .split(' ')
      .slice(1)
      .every(e => !isNaN(Number(e))),
  );

  const sortedLetterLogs = letterLogs.sort((a, b) => {
    let compare = a.slice(a.indexOf(' ')).localeCompare(b.slice(b.indexOf(' ')));
    return compare === 0 ? a.localeCompare(b) : compare;
  });
  return sortedLetterLogs.concat(digitLogs);
};

const logs = ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'];
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
const logs2 = ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'];
// Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

console.log(reorderLogFiles(logs));
