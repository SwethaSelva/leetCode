/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, result = [], allResult = []) {
  if (nums.length === 1) {
    allResult.push([...result, nums[0]]);
    return allResult;
  }
  for (let i = 0; i < nums.length; i++) {
    let remaining = nums.filter(num => num !== nums[i]);
    permute(remaining, [...result, nums[i]], allResult);
  }
  return allResult;
}

console.log(backtrack([1,2,3,4]));
