module.exports = function solveSudoku(matrix) {

  function findZero(matrix) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === 0) return [row, col];
      }
    }
    return null;
  }

  function checkNumber(number, position, matrix) {
    let [row, col] = position;

    for (let i = 0; i < matrix[row].length; i++) {
      if ((matrix[row][i] == number) && (i != col)) return false;
    }

    for (let i = 0; i < matrix.length; i++) {
      if ((matrix[i][col] == number) && (i != row)) return false;
    }

    let squareRow = Math.floor(row / 3) * 3;
    let squareCol = Math.floor(col / 3) * 3;

    for (let i = squareRow; i < squareRow + 3; i++) {
      for (let j = squareCol; j < squareCol + 3; j++) {
        if ((matrix[i][j] == number) && (i != row) && (j != col)) return false;
      }
    }
    return true;
  }

  function solve() {
    let currentPosition = findZero(matrix);
    if (currentPosition == null) return true;

    for (let number = 1; number <= 9; number++) {
      if (checkNumber(number, currentPosition, matrix)) {
        let [r, c] = currentPosition;
        matrix[r][c] = number;

        if (solve()) return true;

        matrix[r][c] = 0;
      }
    }

    return false;
  }

  solve();
  return matrix;
}
