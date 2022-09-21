/**
 * https://leetcode.com/problems/utf-8-validation/
  No. of Bytes |   UTF-8 Octet Sequence (binary)
  -------------+-----------------------------------------
      1        |   0xxxxxxx
      2        |   110xxxxx 10xxxxxx
      3        |   1110xxxx 10xxxxxx 10xxxxxx
      4        |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 */
/**
 * @param {number[]} data
 * @return {boolean}
 */
function binaryConvertor (decimal) {
  if (decimal === 0 || decimal === 1) return `${decimal}`;
  return `${binaryConvertor(Math.floor(decimal/2))}${decimal%2}`;
}

function findByteType (decimal) {
  let lastZeroIdx = -1;
  for (let i = 0; i < 8; i++) {
    let curBit = decimal % 2;
    if (!curBit) lastZeroIdx = 7 - i;
    decimal = Math.floor(decimal/2);
  }
  return lastZeroIdx === -1 ? 8: lastZeroIdx;
}

var validUtf8 = function(data, startId = 0) {
  let mostSignBit = findByteType(data[startId]);
  if (mostSignBit === 0 && startId + 1 === data.length) return true;
  if (mostSignBit === 1 || mostSignBit > data.length - startId || mostSignBit > 4) return false;
  for (let i = startId + 1; i < startId + mostSignBit; i++) if (findByteType(data[i]) !== 1) return false;
  mostSignBit = mostSignBit || 1;
  if (mostSignBit + startId < data.length) return validUtf8(data, mostSignBit + startId);
  return true;
};


console.log(validUtf8([197,130,1])); // true
console.log(validUtf8([228,189,160,229,165,189,13,10])); // true
console.log(validUtf8([235, 140, 4])); // false
console.log(validUtf8([197,130,255,0])); // false
console.log(validUtf8([255])); // false
console.log(validUtf8([240,162,138,147,145])); // false
console.log(validUtf8([250,145,145,145,145])); // false
console.log(validUtf8([39,89,227,83,132,95,10,0])); // false