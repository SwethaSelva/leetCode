/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * Given an numsay of integers nums and an integer k, 
 * return the total number of continuous subnumsays whose sum equals to k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// var subarraySum = function(nums, k) {
//   let sum = nums[0];
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (sum === k) count++;
    
//   // }
//   while (right < nums.length) {
//     if (sum <= k || right === nums.length - 1) {
//       if (sum === k) count++;
//       sum += nums[++right] || 0;
//     } else if (sum > k) {
//       sum = left === right ? nums[++right] || sum : sum - nums[left]; 
//       left++;
//     }
//   }
//   console.log({ sum })
//   return count;
// };

// var subarraySum = function(nums, k) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum < k) continue;
//     if (sum === k) count++;
//     sum = nums[i];
//   }
//   return count;
// }

// var subarraySum = function (nums, target) {
//   let sum = 0;
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   while (left <= right && right < nums.length) {
//     sum += nums[right];
//     if (sum === target) {
//       count++;
//       sum = nums[left];
//       left = right;
//       right++;
//     } else if (sum > target) {
//       sum -= nums[left];
//       left++;
//     }
//   }
//   return count;
// }


// function subarraySum (nums, k) {
//   let left = 0;
//   let right = nums.length - 1;
//   let leftSum = 0;
//   for (let i = 0; i < nums.length; i++) leftSum += nums[i];
//   let rightSum = leftSum;
//   let count = leftSum === k? 1: 0;
//   while (left <= right) {
//     leftSum -= nums[left++];
//     rightSum -= nums[right--];
//     if (leftSum === k) count++;
//     if (rightSum === k) count++;
//   }
//   return count;
// }


console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2
console.log(subarraySum([-1, -1, 1], 0)); // 1

function subarraySum(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count++;
}
console.log(subarraySum([1,3,5,9,10,14], 14)); // 2
console.log(subarraySum([1,2,-1,0,1,-1,-1], 0)); // 5