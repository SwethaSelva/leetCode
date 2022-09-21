/**
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 * Definition for a Node.
 */
function Node(val, children = []) {
  this.val = val;
  this.children = children;
};

/**
 * 
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 *               1
 *     2     3      4       5
 *         6   7    8     9   10
 *             11   12    13
 *             14
 */
function arr_to_n_arch (arr) {
  let root = new Node(arr[0]);
  let childIdx = 0;
  let currentNode = root;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === null) {
      currentNode = currentNode.children;
      childIdx++;
    } else {
      currentNode.children.push(new Node(arr[i]));
    }
  }
  return root;
}

/**
 * 
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let q = [root];
  let result = [];
  let curResult = [];
  let count = 1;
  while (q.length) {
    let currentNode = q.shift();
    curResult.push(currentNode.val)
    count--;
    if (!count) {
      result.push(curResult);
    }
    for (let i = 0; i < root.children.length; i++) {
      q.push(root.children[i]);
      count++;
    }
  }
  return result;
};

console.log(levelOrder([1,null,3,2,4,null,5,6]));