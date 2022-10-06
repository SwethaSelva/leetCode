/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findStartIdx = function (nums) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  let mid = -1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid === left) left = nums[left] > nums[right] ? right : left;
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return left;
};

var search = function (nums, target) {
  let len = nums.length;
  let startIdx = findStartIdx(nums);
  let newNums = [];
  for (let i = 0, j = startIdx; i < len; i++, j++) newNums[i] = nums[j % len];
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (newNums[mid] === target) {
      return (startIdx + mid) % len;
    }
    else if (newNums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

// leetCode solution
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    // When dividing the rotated array into two halves, one half must be sorted

    // Left portion
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) left = mid + 1;
      else right = mid - 1;
    // Right portion
    } else {
      if (target < nums[mid] || target > nums[right]) right = mid - 1;
      else left = mid + 1;
    }
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 5, 7, 87, 0], 0)); // 7
console.log(search([4, 5, 6, 7, 0, 1, 2], 4)); // 0
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 6)); // 2
console.log(search([4, 5, 6, 7, 0, 1, 2], 7)); // 3
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 1)); // 5
console.log(search([4, 5, 6, 7, 0, 1, 2], 2)); // 6
console.log(search([5, 6, 7, 0, 1, 2, 3], 0)); // 3
console.log(search([6, 7, 0, 1, 2, 3], 0)); // 2
console.log(search([5, 1, 3], 0)); // -1
console.log(search([7, 0], 0)); // 1
console.log(search([7], 7)); // 0
console.log(search([7], 1)); // 0
console.log(search([], 1)); // -1