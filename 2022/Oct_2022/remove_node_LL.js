/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

function arrToLL(arr) {
  let head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}
/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curNum = 0;
  function dfs (node, n) {
    if (node.next) node.next = dfs(node.next, n);
    curNum++;
    if (curNum === n) return node.next;
    return node;
  }
  return dfs (head, n);
};

console.log(JSON.stringify(removeNthFromEnd(arrToLL([1,2,3,4,5]), 1)));
console.log(JSON.stringify(removeNthFromEnd(arrToLL([1,2,3,4,5]), 2)));
console.log(JSON.stringify(removeNthFromEnd(arrToLL([1,2,3,4,5]), 3)));
console.log(JSON.stringify(removeNthFromEnd(arrToLL([1,2,3,4,5]), 5)));