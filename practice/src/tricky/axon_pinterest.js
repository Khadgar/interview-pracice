/**
 * @param {string} pictures list of height
 * @return {object} 3 columns with optimal height distribution
 */

var pinterest = function(pictures) {
  // A, B, C will be the columns
  const result = { A: { sum: 0, arr: [] }, B: { sum: 0, arr: [] }, C: { sum: 0, arr: [] } };

  // sort the input pictures descending
  pictures = pictures.sort((a, b) => b - a);

  // iterate through it and pick always the column with the smallest height.
  pictures.forEach(picture => {
    const column = pickColumn(result);
    column.arr.push(picture);
    column.sum += picture;
  });

  return result;
};

/**
 * @param {object} obj
 * @return {object}
 */
var pickColumn = obj => Object.values(obj).sort((a, b) => a.sum - b.sum)[0];

console.log(pinterest([25, 25, 75, 100, 55, 25]));
console.log(pinterest([100, 50, 50, 25, 75, 25]));
console.log(pinterest([80, 100, 20, 35, 90]));
