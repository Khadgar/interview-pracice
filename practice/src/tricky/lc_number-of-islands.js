// https://leetcode.com/problems/number-of-islands/

//BFS approach

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        queue.push([i, j]);
        grid[i][j] = '0';
        while (queue.length > 0) {
          const size = queue.length;
          for (let k = 0; k < size; k++) {
            const position = queue.shift();
            for (let l = 0; l < directions.length; l++) {
              const x = position[0] + directions[l][0];
              const y = position[1] + directions[l][1];
              if (isValidStep(x, y, grid)) {
                queue.push([x, y]);
                grid[x][y] = '0';
              }
            }
          }
          steps++;
        }
      }
    }
  }

  return count;
};

var isValidStep = function(x, y, grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== '0';
};

const mapbfs = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '1'],
];

const mapdfs = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '1'],
];

const map2 = [['1']];

console.log('BFS', numIslands(mapbfs));

//DFS approach

var numIslandsDFS = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

var dfs = function(grid, i, j) {
  if (!isValidStep(i, j, grid)) {
    return 0;
  }
  grid[i][j] = '0';
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};

console.log('DFS', numIslandsDFS(mapdfs));
