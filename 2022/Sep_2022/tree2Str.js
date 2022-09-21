/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
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
 * @param {TreeNode} node
 * @return {string}
 */
 var tree2str = function(node, str = '') {
  if (!node) return str;
  str += node.val;
  if (node.right) {
    str += `(${tree2str(node.left)})(${tree2str(node.right)})`;
  } else if (node.left) {
    str += `(${tree2str(node.left)})`;
  }
  return str;
};

var tree2str = function (node) {
  let str = '';
  let q = [node];
  while (q.length) {
    let currentNode = q.shift();
    str += `${currentNode.val}(`;

    // left
    // right

    ')';
    if (!currentNode.left && currentNode.right) str += ')';
    
  }
  return str;
}

console.log(tree2str(arrToBT([1,2,3,4]))); // "1(2(4))(3)"