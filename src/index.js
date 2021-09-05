module.exports = function solveSudoku(matrix) {

  function findZero(matrix) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === 0) return [row, col];
      }
    }
    return null;
  }

}
