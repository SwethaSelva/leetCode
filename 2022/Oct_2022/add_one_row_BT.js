/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
}
/**
 * https://leetcode.com/problems/add-one-row-to-tree/
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  let q = [root];
  let curDepth = 1;
  if (depth === 1) {
    let node = new TreeNode(val);
    [root, node.left] = [node, root];
    return root;
  }
  let noVal = q.length;
  while (q.length) {
    if (curDepth === depth) return root;
    let curNode = q.shift();
    if (curDepth + 1 === depth) {
      if (curNode.left) {
        let node = new TreeNode(val);
        let temp = curNode.left;
        curNode.left = node;
        node.left = temp;
      }
      if (curNode.right) {
        let node = new TreeNode(val);
        let temp = curNode.right;
        curNode.right = node;
        node.right = temp;
      }
    }
    if (curNode.left) q.push(curNode.left);
    if (curNode.right) q.push(curNode.right);
    noVal--;
    if (!noVal) {
      curDepth++;
      noVal = q.length;
    }
  }
  return root;
};