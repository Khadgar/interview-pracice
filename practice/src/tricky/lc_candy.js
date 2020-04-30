// https://leetcode.com/problems/candy

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const leftToRight = new Array(ratings.length).fill(1);
  const rightToLeft = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    const prev = ratings[i - 1];
    if (prev < ratings[i]) {
      leftToRight[i] = leftToRight[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    const prev = ratings[i + 1];
    if (prev < ratings[i]) {
      rightToLeft[i] = rightToLeft[i + 1] + 1;
    }
  }
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += Math.max(leftToRight[i], rightToLeft[i]);
  }
  return sum;
};

console.log(candy([1, 0, 2])); //5

console.log(candy([1, 2, 2])); //4

console.log(candy([1, 2, 87, 87, 87, 2, 1])); //13
