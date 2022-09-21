/**
 * https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
 * 
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let count = 0;
  let max = 0;
  properties = properties.sort((a,b) => (a[0] === b[0])? a[1] - b[1]: b[0] - a[0]);
  console.log({ properties })
  for (let i = 0; i < properties.length; i++) {
    if (properties[i][1] < max) count++;
    max = Math.max(properties[i][1], max);
  }
  return count;
};

// console.log(numberOfWeakCharacters([[5,5],[6,3],[3,6]])); // 0
// console.log(numberOfWeakCharacters([[1,5],[10,4],[4,3]])); // 1
// console.log(numberOfWeakCharacters([[2,2],[3,3]])); // 1
console.log(numberOfWeakCharacters([[1,1],[2,2],[2,3],[1,2]])); // 1
// [[2, 2], [2, 3], [1, 1], [1, 2]]