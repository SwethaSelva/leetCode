
/**
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let destNode = graph.length - 1;
  let result = [];
  (function findDest (curNode = 0, curPath = []) {
    if (curNode === destNode) return result.push([...curPath, curNode]);
    for (let i = 0; i < graph[curNode].length; i++) {
      let childNode = graph[curNode][i];
      findDest(childNode, [...curPath, curNode], result);
    }
  })();
  return result;
};

console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));
console.log(allPathsSourceTarget([[]]));