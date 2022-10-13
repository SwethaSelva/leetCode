/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
  let firstNum = nums[0];
  let secNum = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > secNum && nums[i] > firstNum) return true;
    else if (nums[i] > firstNum) secNum = nums[i];
    else firstNum = nums[i];
  }
  return false;
};

// var increasingTriplet = function(nums) {
//   let firstNumber = Infinity;
//   let secondNumber = Infinity;
  
//   for (let currentNumber of nums) {
//     if (currentNumber > secondNumber && currentNumber > firstNumber) {
//       return true;
//     }
//     if (currentNumber > firstNumber) {
//       secondNumber = currentNumber;
//     } else {
//       firstNumber = currentNumber;
//     }
//   }
//   return false;
// };
console.log(increasingTriplet([1,1,1,1,1])); // false
console.log(increasingTriplet([1,2,3,4,5])); // true
console.log(increasingTriplet([2,1,5,0,4,6])); // true
console.log(increasingTriplet([2,1,5,0,4,3])); // false
console.log(increasingTriplet([20,100,10,12,5,13])); // true
console.log(increasingTriplet([5,1,3,10,4,5])); // true