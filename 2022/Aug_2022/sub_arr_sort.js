/**
 * https://www.algoexpert.io/questions/subarray-sort
 */

function subarraySort(array) {
  let isUnsorted = false;
  let smallest = Infinity;
  let isUnsortedReverse = false;
  let largest = -Infinity;
  let last = array.length - 1;
  for (let i = 1; i < array.length; i++, last--) {
    // find smallest in forward
    if (!isUnsorted) isUnsorted = array[i-1] > array[i];
    if (isUnsorted) smallest = Math.min(smallest, array[i]);

    // find largest in reverse
    if (!isUnsortedReverse) isUnsortedReverse = array[last-1] > array[last];
    if (isUnsortedReverse) largest = Math.max(largest, array[last]);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) continue;
    else if (array[i] > smallest) smallest = i;
    else smallest = i+1;
    break;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > largest) continue;
    else largest = i;
    break;
  }
  return smallest === Infinity && largest === -Infinity? [-1,-1]: [smallest, largest];
}

console.log(subarraySort([2,3,4,5,6,3,3,6,5,7,8,9])); // [2,8]
console.log(subarraySort([2,3,4,5,6,6,5,7,8,9])); // [4,6]
console.log(subarraySort([2,3,4,5,6,7,6,7,8,9])); // [5,7]
console.log(subarraySort([2,3,4,5,6,7,8,9])); // [-1, -1]
console.log(subarraySort([2,1])); // [0,1]