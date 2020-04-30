var rotateMatrix = function(matrix) {
  const numberOfLayer = Math.round(matrix.length / 2);
  for (let layer = 0; layer < numberOfLayer; layer++) {
    let i = layer;
    let j = layer;
    const temp = [];
    let N = matrix.length - layer;

    // jobbra
    while (j < N - 1) {
      let t = matrix[i][j];
      temp.push(t);
      j++;
    }

    // le
    while (i < N - 1) {
      let t = matrix[i][j];
      matrix[i][j] = temp.shift();
      temp.push(t);
      i++;
    }

    // balra
    while (j > layer) {
      let t = matrix[i][j];
      matrix[i][j] = temp.shift();
      temp.push(t);
      j--;
    }

    // fol
    while (i > layer) {
      let t = matrix[i][j];
      matrix[i][j] = temp.shift();
      temp.push(t);
      i--;
    }

    // a kezdo elemeket is ki kell cserelni
    while (temp.length > 0) {
      matrix[i][j] = temp.shift();
      j++;
    }
  }
  return matrix;
};

const matrix3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix4x4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(rotateMatrix(matrix3x3));
console.log(rotateMatrix(matrix4x4));
