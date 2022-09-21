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
    currentNode.left = new TreeNode(arr[i]);
    queue.push(currentNode.left);
    if (arr[i+1] !== undefined) {
      i++;
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
  }
  return root;
}

/**
 * https://leetcode.com/problems/binary-tree-pruning/
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var pruneTree = function (node) {
  if (node.left) node.left = pruneTree(node.left);
  if (node.right) node.right = pruneTree(node.right);
  if (node.left === null && node.right === null) {
    if (!node.val) return null;
  }
  return node;
};

console.log(JSON.stringify(pruneTree(arrToBT([1, 0, 1, 0, 0, 0, 1]))));
console.log(JSON.stringify(pruneTree(arrToBT([1, 1, 0, 1, 1, 0, 1, 0]))));
console.log(JSON.stringify(pruneTree(arrToBT([]))));