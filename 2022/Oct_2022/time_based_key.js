/**
 * https://leetcode.com/problems/time-based-key-value-store/
 */
 var TimeMap = function() {
  this.hash = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.hash[key]) this.hash[key] = [];
  this.hash[key].push([timestamp, value]);
  return this.hash;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let arr = this.hash[key];
  if (!arr || !arr.length || arr[0][0] > timestamp) return "";

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left+right)/2);
  while (left <= right) {
    mid = Math.floor((left+right)/2);
    if (arr[mid][0] === timestamp) return arr[mid][1];
    else if (arr[mid][0] < timestamp) {
        if (!arr[mid+1] || arr[mid+1][0] > timestamp) break;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return arr[mid][1];
};

function resultGen(oprArr, valArr) {
  let timeMap = null;
  for (let i = 0; i < oprArr.length; i++) {
    let functionName = oprArr[i];
    if (functionName === 'TimeMap') timeMap = new TimeMap(valArr[i]);
    else console.log(timeMap[functionName](...valArr[i]));
  }
}

console.log(resultGen(
  ["TimeMap","set","get","get","set","get","get"],
  [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
));

console.log(resultGen(
  ["TimeMap","set","set","get","get","get","get","get"],
  [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
));
// [null,null,null,"","high","high","low","low"]

console.log(resultGen(
  ["TimeMap","set","set","get","set","get","get"],
  [[],["a","bar",1],["x","b",3],["b",3],["foo","bar2",4],["foo",4],["foo",5]]
));