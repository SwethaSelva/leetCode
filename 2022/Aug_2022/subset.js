/**
 * https://leetcode.com/problems/subsets/
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  if (!nums.length) return result;
  for (let i = 0; i < nums.length; i++) {
    powersetCreator(nums[i]);
  }
  function powersetCreator(num) {
    let currentResult = []
    for (let i = 0; i < result.length; i++) {
      console.log({ result, num }, JSON.stringify(result))
      currentResult.push([...result[i], num]);
    }
    result.push(...currentResult);
  }
  return result;
};

// leetcode solution
var subsets = function(nums) {
  let res = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
      let curr = nums[i];
      res.forEach(a => res.push([...a, curr]));
      res.push([curr]);
  }
  res.unshift([]);
  return res;
};

console.log(subsets([1,2,3])); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]