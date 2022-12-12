function sortMatrix(matrix, direction) {
  let dirs = {
    "Horizontal": [0,1],
    "Vertical": [1,0],
    "diagonal": [-1,1]
  }
  let row = 0;
  let col = 0;
  for (let i = 0; i < matrix.length * matrix.length; i++) {
    if (row < 0 || row > matrix.length - 1) {
      row = 0;
      col++;
    }
    if (col < 0 || col > matrix.length - 1) {
      col = 0;
      row++;
    }
    console.log(matrix[row][col]);
    row += dirs[direction][0];
    col += dirs[direction][1];
  }
} 

JSON.stringify

console.log(sortMatrix(
  [
    [1, 5 ,7 ,4],
    [22,14,15,64],
    [7, 3, 9, 1],
    [12, 7, 8, 2]
  ], 'Vertical'
));

console.log(sortMatrix(
  [
    [1, 5 ,7 ,4],
    [22,14,15,64],
    [7, 3, 9, 1],
    [12, 7, 8, 2]
  ], 'Horizontal'
));