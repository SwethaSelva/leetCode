/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val || 0
  this.left = left || null
  this.right = right || null
}

/**
 * @param {TreeNode} node
 * @return {boolean}
 */
var isValidBST = function(node, upperLimit = Infinity, lowerLimit = -Infinity) {
  if (!node) return true;
  if (node.val > upperLimit || node.val < lowerLimit) return false;
  return isValidBST(node.left, node.val, lowerLimit) && isValidBST(node.right, upperLimit, node.val);
};

let root1 = new TreeNode(5);
root1.left = new TreeNode(1);
root1.right = new TreeNode(4);
root1.right.left = new TreeNode(3);
root1.right.left.right = new TreeNode(6);

let root2 = new TreeNode(0);
console.log(isValidBST(root1));
console.log(isValidBST(root2));