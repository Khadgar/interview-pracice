var printMatrixLayerByLayer = function(matrix) {
  const numberOfLayer = Math.round(matrix.length / 2);
  const result = [];
  for (let layer = 0; layer < numberOfLayer; layer++) {
    let i = layer;
    let j = layer;
    let N = matrix.length - layer;
    // jobbra
    while (j < N - 1) {
      result.push(matrix[i][j]);
      j++;
    }

    // le
    while (i < N - 1) {
      result.push(matrix[i][j]);
      i++;
    }

    // balra
    while (j > layer) {
      result.push(matrix[i][j]);
      j--;
    }

    // fol
    while (i > layer) {
      result.push(matrix[i][j]);
      i--;
    }

    if (N === numberOfLayer) {
      result.push(matrix[i][j]);
    }
  }
  return result;
};

const matrix3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix4x4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(printMatrixLayerByLayer(matrix3x3));
console.log(printMatrixLayerByLayer(matrix4x4));
