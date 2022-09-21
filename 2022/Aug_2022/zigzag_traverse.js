// https://www.algoexpert.io/questions/zigzag-traverse

function zigzagTraverse(array) {
  let result = [];
  let col = 0, row = 0;
  let height = array.length, width = array[0].length;
  let goingUp = 0; // up-right = [-1, 1]; down-left = [1,-1];
  for (let i = 0; i < height * width; i++) {
    result.push(array[row][col]);
    if (goingUp) {
      if (row - 1 >= 0 && col + 1 < width) {
        row--;
        col++;
      } else {
        if (row - 1 < 0 || col + 1 >= width) {
          goingUp--;
          if (col + 1 >= width) row++;
          else col++;
        }
      }
    } else {
      if (row + 1 < height && col - 1 >= 0) {
        row++;
        col--;
      } else {
        if (row + 1 >= height || col - 1 < 0) {
          goingUp++;
          if (row + 1 >= height) col++;
          else row++;
        }
      }
    }
  }
  return result;
}

console.log(zigzagTraverse([
  [1, 3, 4, 7, 8],
  [2, 5, 6, 9, 10]
]));

console.log(zigzagTraverse([
  [1, 3, 4, 10,11],
  [2, 5, 9, 12,19],
  [6, 8, 13,18,20],
  [7, 14,17,21,24],
  [15,16,22,23,25]
]));

console.log(zigzagTraverse([
  [1,  3,  4, 10],
  [2,  5,  9, 11],
  [6,  8, 12, 15],
  [7, 13, 14, 16],
]));