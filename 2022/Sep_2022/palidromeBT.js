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

var pseudoPalindromicPaths  = function(root) {
  
};

console.log(JSON.stringify(arrToBT([2,3,1,3,1,null,1,3])));