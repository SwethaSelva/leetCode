/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * https://leetcode.com/problems/path-sum-ii/
 * 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let result = [];
  var dfs = function(root, targetSum, path = '') {
    if (!root) return;
    targetSum -= root.val;
    path += `${root.val}+`;
    if (!root.left && !root.right && targetSum === 0) {
      path = path.split('+');
      path.length = path.length - 1;
      result.push(path);
    }
    if (root.left) dfs(root.left, targetSum, path);
    if (root.right) dfs(root.right, targetSum, path);
  };
  dfs(root, targetSum);
  return result;
};

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

console.log(pathSum(arrToBT([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22)); // [[5,4,11,2],[5,8,4,5]]
console.log(pathSum(arrToBT([1,2]), 1));
console.log(pathSum(arrToBT([0,1,1]), 1));