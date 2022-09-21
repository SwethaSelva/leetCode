/**
 * https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let unsortCount = 0;
  for (let i = 1; i < arr.length; i++) {
    if (!unsortCount && arr[i - 1] > arr[i]) {
      unsortCount = 1;
    } else if (unsortCount && arr[i - 1] < arr[i]) {

    }
  }
};

console.log(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5])); // 3 - [10,4,2]
console.log(findLengthOfShortestSubarray([5,4,3,2,1])); // 4 - [4,3,2,1] or [5,4,3,2,1[1,2,3]]
console.log(findLengthOfShortestSubarray([1,2,3])); // 0