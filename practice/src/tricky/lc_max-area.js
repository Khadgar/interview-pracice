/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let distance = j - i;
      let area = distance * Math.min(height[i], height[j]);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
