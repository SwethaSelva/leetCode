/**
 * https://leetcode.com/problems/break-a-palindrome/
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function(palindrome) {
  if (palindrome.length < 2) return "";
  let idxToChange = palindrome.length - 1;
  let resultStr = "";
  for (let i = 0; i < Math.floor(palindrome.length/2); i++) {
    if (palindrome[i] !== 'a') {
      idxToChange = i; 
      break;
    }
  }
  for (let i = 0; i < palindrome.length; i++) {
    if (i !== idxToChange) resultStr += palindrome[i];
    else resultStr += palindrome[i] === 'a' ? 'b': 'a';
  }
  return resultStr;
};

console.log(breakPalindrome("xyababayx")); // "ayababayx"
console.log(breakPalindrome("aababaa")); // "aaaabaa"
console.log(breakPalindrome("aa")); // "ab"