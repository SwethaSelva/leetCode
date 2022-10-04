/**\
 * https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let i = -1, j = 0;
  let totalCostTime = 0;
  let maxTime = 0;
  while(j < neededTime.length) {
    if (i === -1) {
      if (colors[j] === colors[j+1]) {
        i = j;
        maxTime = neededTime[i];
      }
    } else {
      if (colors[i] !== colors[j]) {
        i = - 1; j--;
      } else {
        totalCostTime += Math.min(maxTime, neededTime[j]);
        maxTime = Math.max(maxTime, neededTime[j]);
      }
    }
    j++;
  }
  return totalCostTime;
};
// console.log(minCost('aabaa', [1,2,3,4,1])); // 2
// console.log(minCost('baaabccdef', [1,2,1,3,1,2,1,3,1,2])); // 4
// console.log(minCost('aaaaa', [10,10,10,10,12])); // 7
console.log(minCost('bbbaaa', [4,9,3,8,10,9])); // 23 -- 15
console.log(minCost("cddcdcae", [4,8,8,4,4,5,4,2])); // 8
