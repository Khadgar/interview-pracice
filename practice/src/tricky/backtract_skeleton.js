var result = [];

var solution = function (chars) {
  const charsArr = chars.split('');
  backtrackPermutation([], charsArr);
  return result;
};

var backtrackPermutation = function (combinations, chars) {
  if (combinations.length === chars.length) {
    result.push(combinations.map((el) => el.choice).join(''));
    return;
  }

  for (let i = 0; i < chars.length; i++) {
    let choice = chars[i];
    // Skip if element already exists in 'runningChoices'
    if (combinations.find((el) => el.choice === choice)) {
      continue;
    }
    // 1.) Choose - Add the item
    combinations.push({ choice, index: i });
    // 2.) Explore - Recurse on the choice
    backtrackPermutation(combinations, chars);
    combinations.pop();
  }
};

var combine = function (n, k) {
  var result = [];

  var backtrack = function (first, combinations, n, length) {
    if (combinations.length === length) {
      result.push([...combinations]);
      return;
    }

    for (let i = first; i < n + 1; i++) {
      combinations.push(i);
      backtrack(i + 1, combinations, n, k);
      combinations.pop();
    }
  };
  backtrack(1, [], n, k);

  return result;
};

console.log(solution('abc'));

console.log(combine(4, 2));
