/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let halfLength = Math.floor(matrix.length / 2);
  for (let start = 0; start < halfLength; start++) {
    end = matrix.length - 1 - start;
    [matrix[start], matrix[end]] = [matrix[end], matrix[start]];
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }
  return matrix;
};


// LeetCode
var rotate = function (matrix) {
  let N = matrix.length - 1
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < N - i; j++) {
      let buf = matrix[i][j]
      matrix[i][j] = matrix[N - j][i]
      matrix[N - j][i] = matrix[N - i][N - j]
      matrix[N - i][N - j] = matrix[j][N - i]
      matrix[j][N - i] = buf
    }
  }
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1], [8,5,2], [9,6,3]]
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]