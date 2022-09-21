/**
 * Definition for a binary tree node.
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ - easy
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  let p1 = Math.min(p.val, q.val);
  q = Math.max(p.val, q.val);
  while (root) {
    if (root.val >= p1 && root.val <= q) return root;
    if (root.val < q) root = root.right;
    else if (root.val >= q) root = root.left;
  }
  return null;
};

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(root, 3, 9));
