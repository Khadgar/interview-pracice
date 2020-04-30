// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const s = [...new Set(A)].sort((a, b) => a - b);
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > 0) {
      if (counter !== s[i]) {
        return counter;
      }
      counter++;
    }
  }
  return counter;
}
