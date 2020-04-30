var solution = function (N) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = N >= 0 ? 0 : 1; i < `${N}`.length + 1; i++) {
    const result = [`${N}`.slice(0, i), '5', `${N}`.slice(i)].join('');
    console.log(result);
    if (Number(result) > max) {
      max = Number(result);
    }
  }
  return max;
};

console.log(solution(268));
console.log(solution(670));
console.log(solution(0));
console.log(solution(-999));
console.log(solution(945));
console.log(solution(439));
console.log(solution(-945));
console.log(solution(-439));
