/**
 * https://leetcode.com/problems/word-search/ 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  let queue = [];
  let dirs = [[0, -1], [0, 1], [1, 0], [-1, 0]];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (word[0] === board[row][col]) queue.push([row, col])
    }
  }
  console.log({ queue })
  while (queue.length) {
    let currentEle = queue.pop();
    let visited = { [`${currentEle[0]}-${currentEle[1]}`]: true }
    let isValid = dfs(currentEle, 1, JSON.stringify(visited));
    if (isValid) return isValid;
  }
  function dfs ([row, col], pos, visited = '{}') {
    // visit neighbour node
    for (let dir of dirs) {
      let curRow = row + dir[0];
      let curCol = col + dir[1];
      if (
        (curRow >= board.length || curRow < 0 || curCol >= board[0].length || curCol < 0)
        ) continue;
      if (pos >= word.length) return true;
      if (board[curRow][curCol] !== word[pos]) continue;
      console.log({ visited })
      // visited nodes
      visited = JSON.parse(visited);
      if (visited[`${curRow}-${curCol}`]) continue;
      visited[`${curRow}-${curCol}`] = true;

      let isValid = dfs([curRow+dir[0], curCol+dir[1]], pos+1, JSON.stringify(visited));
      if (isValid) return isValid;
    }
  }
  return false;
}


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // false
