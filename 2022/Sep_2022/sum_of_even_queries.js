/**
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  let evenSum = 0;
  let answers = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) evenSum += nums[i];
  }
  for (let i = 0; i < queries.length; i++) {
    if (nums[queries[i][1]] % 2 === 0) evenSum -= nums[queries[i][1]];
    let curSum = nums[queries[i][1]] + queries[i][0];
    if (curSum % 2 === 0) evenSum += curSum;
    nums[queries[i][1]] = curSum;
    answers.push(evenSum);
  }
  return answers;
};

// console.log(sumEvenAfterQueries([1,2,3,4,5], [[1,0],[-3,1],[-4,0],[2,3],[23,2]])); // [8,6,2,4]
// console.log(sumEvenAfterQueries([1], [[4,0]])); // [0]
console.log(sumEvenAfterQueries([3,2], [[4,0],[3,0]])); // [2,12]