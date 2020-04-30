/// https://leetcode.com/discuss/interview-question/555713/Microsoft-or-Online-Codility-Assessment-or-Casino-Game-(Task-2)

var solution = function (N, K) {
  if (N === 1) {
    return 0;
  }
  if (K === 0) {
    return N - 1;
  }
  let ans = 0;
  while (N > 2) {
    if (K == 0) return ans + N - 1;
    ans++;
    if (N % 2 == 0 && K > 0) {
      N /= 2;
      K--;
    } else {
      N--;
    }
  }
  return ans + 1;
};

console.log(solution(8, 0)); //7

console.log(solution(18, 2)); //6

console.log(solution(10, 10)); //4
