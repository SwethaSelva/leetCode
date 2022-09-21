/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

function arrToList(arr) {
  let currentNode = new ListNode(arr[0]);
  let head = currentNode;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

module.exports = { ListNode, arrToList };