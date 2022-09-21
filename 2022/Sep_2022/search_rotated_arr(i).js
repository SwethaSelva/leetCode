/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return nums[0] === target? 0: -1;
  if (nums.length === 2) {
    if (nums[0] === target) return 0;
    else if (nums[1] === target) return 1;
    else return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left+right)/2);
  while (left < right) {
    mid = Math.floor((left+right)/2);

    if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) {
      mid++;
      break;
    };
    if (nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) break;
    if (nums[mid] < nums[left]) right = mid;
    else if (nums[mid] > nums[right]) left = mid;
  }
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor()
  }
};

console.log(search([4,5,6,7,0,1,2])); // 4
console.log(search([6,7,0,1,2,3])); // 2
console.log(search([7,0])); // 1
console.log(search([5,6,7,0,1,2,3])); // 3