var bucketFill = function(picture) {
  pictureMap = picture.map(el => el.split('').map(e => ({ pixel: e, visited: false })));
  let count = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  for (let i = 0; i < pictureMap.length; i++) {
    for (let j = 0; j < pictureMap[0].length; j++) {
      if (pictureMap[i][j].visited === false) {
        count++;
        queue.push([i, j]);
        pictureMap[i][j].visited = true;
        const currPixel = pictureMap[i][j];
        while (queue.length > 0) {
          const size = queue.length;
          for (let k = 0; k < size; k++) {
            const position = queue.shift();
            for (let l = 0; l < directions.length; l++) {
              const x = position[0] + directions[l][0];
              const y = position[1] + directions[l][1];
              if (isValidStep(x, y, pictureMap, currPixel)) {
                queue.push([x, y]);
                pictureMap[x][y].visited = true;
              }
            }
          }
        }
      }
    }
  }

  return count;
};




var isValidStep = function(x, y, grid, currPixel) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && !grid[x][y].visited && currPixel.pixel === grid[x][y].pixel;
};

console.log(bucketFill(['aabba', 'aabba', 'aaacb'])); //5
console.log(bucketFill(['eaabba', 'aaabba', 'aaaacb'])); //6
