// https://www.hackerrank.com/challenges/2d-array/problem

var hourglassSum = function(arr) {
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const sumOfPattern = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      if (sumOfPattern > min) {
        min = sumOfPattern;
      }
    }
  }
  return min;
};

const array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(array));
