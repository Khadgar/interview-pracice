// https://leetcode.com/discuss/interview-question/356150

// Input:
// [['S', 'O', 'O', 'S', 'S'],
//  ['D', 'O', 'D', 'O', 'D'],
//  ['O', 'O', 'O', 'O', 'X'],
//  ['X', 'D', 'D', 'O', 'O'],
//  ['X', 'D', 'D', 'D', 'O']]

// Output: 3
// Explanation:
// You can start from (0,0), (0, 3) or (0, 4). The treasure locations are (2, 4) (3, 0) and (4, 0). Here the shortest route is (0, 3), (1, 3), (2, 3), (2, 4).

var treasureIsland = function(map) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 'S') {
        min = Math.min(BFSsearch(map, i, j), min);
      }
    }
  }
  return min;
};

var BFSsearch = function(map, startX, startY) {
  const grid = JSON.parse(JSON.stringify(map)); //deep copy
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  let steps = 1;
  queue.push([startX, startY]);
  grid[startX][startY] = 'D';
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const position = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        const x = position[0] + directions[j][0];
        const y = position[1] + directions[j][1];
        if (isValidStep(x, y, grid)) {
          if (grid[x][y] === 'X') {
            return steps;
          }
          queue.push([x, y]);

          grid[x][y] = 'D';
        }
      }
    }
    steps++;
  }
  return -1;
};

var isValidStep = function(x, y, grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== 'D';
};

const map = [
  ['S', 'O', 'O', 'S', 'S'],
  ['D', 'O', 'D', 'O', 'D'],
  ['O', 'O', 'O', 'O', 'X'],
  ['X', 'D', 'D', 'O', 'O'],
  ['X', 'D', 'D', 'D', 'O'],
];
console.log(treasureIsland(map));
