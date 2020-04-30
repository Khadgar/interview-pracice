/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

var dfs = function(board, i, j, word, index) {
  if (index === word.length) {
    return true;
  }
  if (i > board.length - 1 || i < 0 || j < 0 || j > board[0].length - 1) {
    return false;
  }

  if (board[i][j] !== word[index]) {
    return false;
  }

  board[i][j] = '*';
  const result = dfs(board, i - 1, j, word, index + 1) || dfs(board, i, j - 1, word, index + 1) || dfs(board, i, j + 1, word, index + 1) || dfs(board, i + 1, j, word, index + 1);
  board[i][j] = word[index];
  return result;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
// console.log(exist(board, 'ABCCED')); //true
// console.log(exist(board, 'SEE')); //true
console.log(exist(board, 'ABCB')); //false
