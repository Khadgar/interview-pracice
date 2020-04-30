// https://www.hackerrank.com/challenges/jumping-on-the-clouds

var jumpingOnClouds = function(c) {
  let numberOfJumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] !== undefined && c[i + 2] === 0) {
      i = i + 2;
    } else if (c[i + 1] !== undefined) {
      i++;
    }
    numberOfJumps++;
  }
  return numberOfJumps;
};

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); //3

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); //4
