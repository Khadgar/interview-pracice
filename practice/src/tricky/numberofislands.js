var numberOfIslands = function(islands) {
  let count = 0;
  const directions = [
    [0, 1],
    [1, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[0].length; j++) {
      if (islands[i][j] === '1') {
        count++;
        queue.push([i, j]);
        while (queue.length > 0) {
          let size = queue.length;
          for (let k = 0; k < size; k++) {
            let position = queue.shift();
            for (let l = 0; l < directions.length; l++) {
              const x = position[0] + directions[l][0];
              const y = position[1] + directions[l][1];
              if (isValidStep(islands, x, y)) {
                queue.push([x, y]);
                grid[x][y] = '0';
              }
            }
          }
        }
      }
    }
  }
  return count;
};

var treasureIsland = function(grid) {
  const directions = [
    [0, 1],
    [1, -1],
    [1, 0],
    [-1, 0],
  ];

  let steps = 1;
  const queue = [];
  queue.push([0, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const position = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        const x = position[0] + directions[j][0];
        const y = position[1] + directions[j][1];
        if (isValidStep(grid, x, y)) {
          grid[x][y] = 'VISITED';
          step++;
        }
      }
    }
  }
};

var isValidStep = function(x, y, grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== '0';
};
