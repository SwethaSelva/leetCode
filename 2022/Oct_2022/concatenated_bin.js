/**
 * https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
 * 
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
  let binConc = '';
  for (let i = 0; i <= n; i++) binConc += i.toString(2);
  return (BigInt(`0b${binConc}`) % BigInt(1e9+7)).toString();
};

var concatenatedBinary = function(n) {
  let ans = 1, len = 0b100;
  for (let i = 2; i <= n; i++) {
    if (i === len) len <<= 1
    ans = (ans * len + i) % 1000000007
  }
  return ans
};

console.log(`${3} ===>`, concatenatedBinary(3)); // 27
console.log(`${9} ===>`, concatenatedBinary(9)); // 28931977
console.log(`${12} ===>`, concatenatedBinary(12)); // 1101110010111011110001001101010111100 - 505379714
console.log(`${17} ===>`, concatenatedBinary(17)); // 144764181 - 144764189
console.log(`${18} ===>`, concatenatedBinary(18)); // 632453782 - 632454116
console.log(`${42} ===>`, concatenatedBinary(42)); // 727837408
console.log(concatenatedBinary(100000));


function binConvertor(dec) {
  let bin = '';
  while (dec > 0) {
    bin = dec % 2 + bin;
    dec = Math.floor(dec/ 2);
  }
  return +bin;
}

var concatenatedBinary1 = function(n) {
  let curByte = binConvertor(n);
  let resultDec = 0;
  let pos = 0;
  let flip = { 0: '1', 1: '0' };

  while (n--) {
    let nextByte = '';
    let seenFirstOne = false;
    curByte = `${curByte}`;

    for (let i = curByte.length - 1; i >= 0; i--) {
      resultDec += curByte[i] * (2 ** pos);

      let curBit = seenFirstOne ? curByte[i]: flip[curByte[i]];
      if (!seenFirstOne) seenFirstOne = +curByte[i];
      nextByte = curBit + nextByte;
      pos++;
    }

    curByte = +nextByte;
  }
  return resultDec % 1000000007;
};