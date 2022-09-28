/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let dominoesArr = dominoes.split('');
  let leftPtr = 0;
  let rightPtr = 0;
  let dominoesQueue = [];
  // create a queue to save range of dots
  while (rightPtr < dominoesArr.length) {
    if (dominoesArr[rightPtr] === '.') {
      leftPtr = rightPtr - 1;
      while (dominoesArr[rightPtr] === '.') rightPtr++;
      if (
        dominoesArr[leftPtr] === dominoesArr[rightPtr] ||
        dominoesArr[leftPtr] !== 'L' && dominoesArr[rightPtr] !== 'R'
      ) dominoesQueue.push([leftPtr, rightPtr]);
      leftPtr = rightPtr;
    }
    rightPtr++;
  }

  // fill the dots based on start and end directions.
  while (dominoesQueue.length) {
    let [leftPtr, rightPtr] = dominoesQueue.shift();
    
    if (
      dominoesArr[leftPtr] === dominoesArr[rightPtr]
      || (leftPtr < 0 && dominoesArr[rightPtr] === 'L')
      || (rightPtr > dominoesArr.length - 1 && dominoesArr[leftPtr] === 'R')
    ) {
      for (let i = leftPtr + 1; i < rightPtr; i++) dominoesArr[i] = dominoesArr[leftPtr] || dominoesArr[rightPtr] || dominoesArr[leftPtr+1];
    } else if (dominoesArr[leftPtr] === 'R' && dominoesArr[rightPtr] === 'L') {
      let midIdx = leftPtr + 1 + ((rightPtr - leftPtr - 1)/2);
      for (let i = leftPtr + 1; i < Math.floor(midIdx); i++) dominoesArr[i] = dominoesArr[leftPtr];
      for (let i = Math.ceil(midIdx); i < rightPtr; i++) dominoesArr[i] = dominoesArr[rightPtr];
    }
  }
  return dominoesArr.join('');
};

console.log(pushDominoes("RR.L.....R....L")); // "RR.L.....RRRLLL"
console.log(pushDominoes("RRL.RL.RL..RL...R")); // "RRL.RL.RL..RL...R"
console.log(pushDominoes("......L")); // "LLLLLLL"
console.log(pushDominoes("......R")); // "......R"
console.log(pushDominoes("L......")); // "L......"
console.log(pushDominoes("R......")); // "RRRRRRR"
console.log(pushDominoes(".L.R...LR..L..")); // "LL.RR.LLRRLL.."
console.log(pushDominoes(".")); // "."
console.log(pushDominoes("R.R.L")); // "RRR.L"