/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
/**
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * 312211
 * 13112221
 * 1113213211
 * 31131211131221
 * 13211311123113112211
 */
var countAndSay = function(n) {
  let result = '1';
  let curResult = '';
  for (let i = 2; i <= n; i++) {
    let prevEle = 0;
    let count = 1;
    for (let j = 1; j < result.length; j++) {
      if (result[prevEle] !== result[j]) {
        curResult
        prevEle = j;
        count = 0;
      }
    }
  }
  return result;
};