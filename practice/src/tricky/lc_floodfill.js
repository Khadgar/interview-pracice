//https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let currColor = image[sr][sc];
  if (currColor !== newColor) {
    fill(image, sr, sc, currColor, newColor);
  }
  return image;
};

var fill = function(image, r, c, currColor, newColor) {
  if (isValidStep(r, c, image) && image[r][c] === currColor) {
    image[r][c] = newColor;
    fill(image, r + 1, c, currColor, newColor);
    fill(image, r - 1, c, currColor, newColor);
    fill(image, r, c + 1, currColor, newColor);
    fill(image, r, c - 1, currColor, newColor);
  }
};

var isValidStep = function(r, c, image) {
  return r >= 0 && r < image.length && c >= 0 && c < image[0].length;
};

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
console.log(floodFill(image, 1, 1, 2));
