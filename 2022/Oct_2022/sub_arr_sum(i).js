/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// function isMultiplibleByK (sum, k) {
//   return = 
// }
var checkSubarraySum = function(nums, k) {
  let left = 0;
  let right = left + 1;
  let sum = nums[left];
  while (left <= right && right < nums.length) {
    sum += nums[right];
    let isMultiplyByK = sum % k === 0;
    let quotient = Math.trunc(sum/);
    if (isMultiplyByK) return isMultiplyByK;
    if 
  }
};