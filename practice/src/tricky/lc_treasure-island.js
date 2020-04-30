// https://leetcode.com/discuss/interview-question/347457
// Input:
// [['O', 'O', 'O', 'O'],
//  ['D', 'O', 'D', 'O'],
//  ['O', 'O', 'O', 'O'],
//  ['X', 'D', 'D', 'O']]

// Output: 5
// Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.

var treasureIsland = function(map) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  let steps = 1;
  queue.push([0, 0]);
  map[0][0] = 'D';
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const position = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        const x = position[0] + directions[j][0];
        const y = position[1] + directions[j][1];
        if (isValidStep(x, y, map)) {
          if (map[x][y] === 'X') {
            return steps;
          }
          queue.push([x, y]);

          map[x][y] = 'D';
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
  ['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['X', 'D', 'D', 'O'],
];
console.log(treasureIsland(map));
