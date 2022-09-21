/**
 * https://leetcode.com/problems/valid-sudoku/
 */
function diagonalValidator(board, start, end) {
  let hash = {};
  for (let i = start; i < start + end; i++) {
    for (let j = start; j < start + end; j++) {
      if (board[i][j] === '.') continue;
      if (hash[board[i][j]]) return false;
      hash[board[i][j]] = true;
    }
  }
  return true;
}

function arrValidator(board, rowStart, colStart, end) {
  let hash = {};
  let colHash = {};
  for (let i = rowStart; i < rowStart + end; i++) {
    for (let j = colStart; j < colStart + end; j++) {
      if (hash[board[i][j]] || colHash[board[j][i]]) return false;
      if (board[i][j] !== '.') hash[board[i][j]] = true;
      if (board[j][i] !== '.') colHash[board[j][i]] = true;
    }
  }
  return true;
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    // check row and col
    let hash = {};
    let colHash = {};
    for (let j = 0; j < board[i].length; j++) {
      if (hash[board[i][j]] || colHash[board[j][i]]) return false;
      if (board[i][j] !== '.') hash[board[i][j]] = true;
      if (board[j][i] !== '.') colHash[board[j][i]] = true;
    }
    // check 3*3
    let multiplier = 3;
    if (
      i < 2 &&
      (!diagonalValidator(board, i*multiplier, multiplier)
      || !arrValidator(board, i*multiplier, i*multiplier+3, multiplier))
    ) return false;
    if (
      i === 2 &&
      (!diagonalValidator(board, i*multiplier, multiplier)
      || !arrValidator(board, i - 2, i*multiplier, multiplier))
    ) return false;
  }
  return true;
};

// leetcode solution
var isValidSudoku = function(board) {
  const arraySet = new Set();
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          const cellArrIndex = Math.floor(i/3) * 3 + Math.floor(j/3)
          const valueHorizontal = `${num}-h${i}`;
          const valueVertical = `${num}-v${j}`;
          const valueCell = `${num}-c${cellArrIndex}`;
          if (num !== '.') {
              if (
                  arraySet.has(valueHorizontal)
                  || arraySet.has(valueVertical)
                  || arraySet.has(valueCell)
              ) {
                  return false;
              }
              arraySet.add(valueHorizontal)
              arraySet.add(valueVertical)
              arraySet.add(valueCell)
          }
      }
  }
  
  return true;
};

console.log(isValidSudoku([[".","4",".",".",".",".",".",".","."],[".",".","4",".",".",".",".",".","."],[".",".",".","1",".",".","7",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".","3",".",".",".","6","."],[".",".",".",".",".","6",".","9","."],[".",".",".",".","1",".",".",".","."],[".",".",".",".",".",".","2",".","."],[".",".",".","8",".",".",".",".","."]]));
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))