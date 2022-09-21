/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let res = dfs(root);
  let result = Object.entries(res).sort((a, b) => a[0] - b[0]);
  let ans = []; // we will store required answer in this array
  for (let [key, obj] of result) {
    let auxArr = [];
    for (let arr of Object.values(obj)) // looping through arrays of diffrent heights
      auxArr = auxArr.concat(arr) // concating these to get required result
    ans.push(auxArr); // pushing this to our ans array 
  }
  return ans;
};

function dfs(node, row = 0, col = 0, result = {}) {
  if (!result[col]) result[col] = {};
  if (!result[col][row]) result[col][row] = [];
  result[col][row].push(node.val);
  result[col][row].sort((a, b) => a - b);
  if (node.left) dfs(node.left, row + 1, col - 1, result);
  if (node.right) dfs(node.right, row + 1, col + 1, result);
  return result;
}