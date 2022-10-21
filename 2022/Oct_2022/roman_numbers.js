/**
_______________
|  I   | 1    |
|  V   | 5    |
|  X   | 10   |
|  L   | 50   |
|  C   | 100  |
|  D   | 500  |
|  M   | 1000 |
_______________
187 = 100+50+10+10+10+5+1+1 = CLXXXVII
487 = CDLXXXVII
59 - LIX
 */
/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num > 3999 || num < 1) return false;

  let numsDir =  [1,  5,  10, 50, 100,500,1000];
  let romanDir = ['I','V','X','L','C','D','M'];
  let result = '';
  return backTracking(num, numsDir.length - 1);

  function backTracking(num, startIdx) {
    if (num < 1) return result;
    for (let i = startIdx; i >= 0; i--) {
      if (numsDir[i] > num) continue;
      
      let tensIdx = i % 2? i-1: i;
      let digit = Math.floor(num / numsDir[tensIdx]);
      if (digit === 9) {
        result += romanDir[i-1] + romanDir[i+1];
        return backTracking(num % numsDir[tensIdx], tensIdx);
      }

      if (digit === 4) result += romanDir[i] + romanDir[i+1];
      else {
        for (let j = 0; j < Math.floor(num / numsDir[i]); j++)
          result += romanDir[i];
      }
      return backTracking(num % numsDir[i], i);
    }
    return result;
  }
};

console.log(intToRoman(167)); // CLXVII
console.log(intToRoman(487)); // CDLXXXVII // LC
console.log(intToRoman(11)); // XI
console.log(intToRoman(111)); // CXI
console.log(intToRoman(1999)); // "MCMXCIX"