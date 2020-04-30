(() => {
  const startBtn = document.querySelector('.startBtn');
  const cells = Array.from(document.querySelectorAll('.cell'));
  const notification = document.querySelector('.notification');
  const playerXScoreContainer = document.querySelector('.result-X-score');
  const playerOScoreContainer = document.querySelector('.result-O-score');
  const nextPlayerContainer = document.querySelector('.nextPlayer');

  const GRID = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let notifications = [];

  let nextPlayer = 'X';
  let playerXscore = 0;
  let playerOscore = 0;

  startBtn.addEventListener('click', () => {
    startGame(true);
  });

  cells.forEach(cell =>
    cell.addEventListener('click', e => {
      const clickedCell = e.target.id.split('_');
      const row = clickedCell[0];
      const col = clickedCell[1];
      if (GRID[row][col] === 0) {
        GRID[row][col] = nextPlayer;
        nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
        nextPlayerContainer.innerHTML = nextPlayer;
        refreshGrid();
        const result = evaluateGrid(row, col);
        if (result) {
          startGame();
        }
      }
    }),
  );

  const refreshGrid = () => {
    GRID.forEach((r, i) =>
      r.forEach((c, j) => {
        if (GRID[i][j] !== 0) {
          cells.find(cell => cell.id === `${i}_${j}`).innerHTML = GRID[i][j];
        } else {
          cells.find(cell => cell.id === `${i}_${j}`).innerHTML = '';
        }
      }),
    );
  };

  const startGame = hard => {
    GRID.forEach((row, i) =>
      row.forEach((cell, j) => {
        GRID[i][j] = 0;
      }),
    );
    refreshGrid();
    nextPlayer = 'X';
    if (hard) {
      notifications = [];
      playerXscore = 0;
      playerOscore = 0;
    }
    playerXScoreContainer.innerHTML = playerXscore;
    playerOScoreContainer.innerHTML = playerOscore;
    nextPlayerContainer.innerHTML = nextPlayer;
    refreshNotifications();
  };

  const refreshNotifications = () => {
    notification.innerHTML = '';
    notifications.forEach(n => {
      const notificationElement = document.createElement('span');
      notificationElement.className = 'notificationElement';
      notificationElement.innerHTML = n;
      notification.appendChild(notificationElement);
    });
  };

  const evaluateGrid = (r, c) => {
    // column check
    const column = [];
    for (var i = 0; i < GRID.length; i++) {
      column.push(GRID[i][c]);
    }

    // row check
    const row = [];
    for (var j = 0; j < GRID[0].length; j++) {
      row.push(GRID[r][j]);
    }

    // diagonal check
    const diagLeftToRight = [];
    const diagRightToLeft = [];
    for (let i = 0; i < GRID.length; i++) {
      diagLeftToRight.push(GRID[i][i]);
      diagRightToLeft.push(GRID[i][GRID.length - i - 1]);
    }

    if (column.every(c => c === 'X') || row.every(c => c === 'X') || diagLeftToRight.every(c => c === 'X') || diagRightToLeft.every(c => c === 'X')) {
      playerXscore++;
      notifications.push('X won');
      return 'X';
    }

    if (column.every(c => c === 'O') || row.every(c => c === 'O') || diagLeftToRight.every(c => c === 'O') || diagRightToLeft.every(c => c === 'O')) {
      playerOscore++;
      notifications.push('O won');
      return 'O';
    }

    // draw
    const draw = GRID.reduce((acc, curr) => acc.concat(curr), []).every(cell => cell !== 0);
    if (draw) {
      notifications.push('Draw');
    }

    return draw;
  };

  startGame(true);
})();
