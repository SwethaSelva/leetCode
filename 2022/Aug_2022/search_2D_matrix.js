/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let colIndex = 0;
  let rowIndex = 0;
  if (matrix.length > 1) {
    colIndex = colwiseBinarySearch(matrix, target, 0, matrix.length - 1);
  }
  if (matrix[colIndex].length > 1) {
    rowIndex = rowwiseBinarySearch(matrix[colIndex], target, 0, matrix[colIndex].length - 1);
  }
  console.log({ rowIndex, colIndex })
  return matrix[colIndex][rowIndex] === target;
};

function rowwiseBinarySearch(matrix, target, startIdx, endIdx) {
  let lessValIdx = startIdx;
  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx)/2);
    if (matrix[midIdx] === target) return midIdx;
    else if (matrix[midIdx] > target) endIdx = midIdx - 1;
    else {
      lessValIdx = midIdx;
      startIdx = midIdx + 1;
    }
  }
  return lessValIdx;
}

function colwiseBinarySearch(matrix, target, startIdx, endIdx) {
  let lessValIdx = startIdx;
  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx)/2);
    if (matrix[midIdx][0] === target) return midIdx;
    else if (matrix[midIdx][0] > target) endIdx = midIdx - 1;
    else {
      lessValIdx = midIdx;
      startIdx = midIdx + 1;
    }
  }
  return lessValIdx;
}

// Leetcode Solution 1
var searchMatrix = function(matrix, target) {
  let j = matrix[0].length - 1, i = 0
  
  while(j >= 0 && i < matrix.length) {
      if(matrix[i][j] === target) return true
      
      if(matrix[i][j] > target) j--
      else i++
  }
  return false
}

// Leetcode Solution 2
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let l = 0;
  let r = n*m - 1;
  while(l <= r){
    let mid = l + Math.floor((r - l)/2);
    let midNum = matrix[Math.floor(mid/n)][mid%n];
    if(midNum === target)return true;
    else if(midNum < target) l = mid + 1;
    else r =  mid - 1;
  }
  return false;
}
console.log(searchMatrix([[1,1]],1)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
console.log(searchMatrix([[-1,3]], 3)); // true
console.log(searchMatrix([[1,3,5]], -1)); // false
