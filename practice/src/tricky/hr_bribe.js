// https://www.hackerrank.com/challenges/new-year-chaos

var minimumBribes = function(q) {
  let numberOfBribe = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    let originalPerson = i + 1;
    let newPosition = q.indexOf(originalPerson);
    //console.log(originalPerson, newPosition, q[i]);
    if (i - newPosition > 2) {
      console.log('Too chaotic');
      break;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) if (q[j] > q[i]) ans++;
  }
  console.log(numberOfBribe);
};

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));

console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])); //4

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); //7
