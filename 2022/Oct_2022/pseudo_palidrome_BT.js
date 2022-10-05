/**
 * Definition for a binary tree node.
 */
 function TreeNode(val = 0, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function arrToBT(arr) {
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for (let i = 1; i < arr.length; i++) {
    let currentNode = queue.shift();
    currentNode.left = (arr[i] === null) ? null: new TreeNode(arr[i]);
    queue.push(currentNode.left);
    if (arr[i+1] !== null && i < arr.length) {
      i++;
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
  }
  return root;
}

/**
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
  let pathCount = 0;
  let path = new Array(10).fill(0);
  path[root.val-1] = 1;
  function dfs (node, parity = 1) {
    if (!node) return pathCount;
    if (!node.left && !node.right && parity < 2) pathCount += 1;   
    if (node.left) {
      path[node.left.val - 1] += 1;
      parity += path[node.left.val - 1] % 2? 1: -1;
      dfs(node.left, parity);
      path[node.left.val - 1] -= 1;
      parity += path[node.left.val - 1] % 2? 1: -1;
    }
    if (node.right) {
      path[node.right.val - 1] += 1;
      parity += path[node.right.val - 1] % 2? 1: -1;
      dfs(node.right, parity);
      path[node.right.val - 1] -= 1;
      parity += path[node.right.val - 1] % 2? 1: -1;
    }
    return pathCount;
  }
  return dfs(root);
};

console.log(JSON.stringify(arrToBT([2,3,1,3,1,null,1,3])));

/**
{ arr: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1], parity: 2 }
{ arr: [0, 2, 0, 1, 0, 0, 0, 0, 0, 0], parity: 1 }
{ arr: [0, 2, 0, 1, 0, 0, 0, 0, 0, 0], parity: 1 }
 */