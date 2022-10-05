/**
 * https://leetcode.com/problems/path-sum-ii/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, result = [], curResult = []) {
  if (!root) return result;
  if (!root.left && !root.right && targetSum - root.val === 0) {
    result.push([...curResult, root.val]);
  }
  root.left && pathSum(root.left, targetSum - root.val, result, [...curResult, root.val]);
  root.right && pathSum(root.right, targetSum - root.val, result, [...curResult, root.val])
  return result;
};