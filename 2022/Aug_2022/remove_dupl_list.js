let { ListNode, arrToList } = require('./linked_list_base_code');

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  let prevPtr = undefined;
  let nextPtr = head;
  let resultNode = new ListNode();
  let resultHead = resultNode;
  while (head) {
    nextPtr = nextPtr.next;
    let isNotValid = (prevPtr && prevPtr.val === head.val) || (nextPtr && nextPtr.val === head.val);
    if (!isNotValid) {
      resultHead.next = new ListNode(head.val);
      resultHead = resultHead.next;
    }
    prevPtr = head;
    head = nextPtr;
  }
  return resultNode.next;
};

console.log(deleteDuplicates(arrToList([1, 1, 1, 1, 2, 3, 5, 6])))
console.log(deleteDuplicates(arrToList([0, 0, 0, 0, 0, 0, 0])))
console.log(deleteDuplicates(arrToList([1, 1, 5, 6])))
console.log(deleteDuplicates(arrToList([1, 1, 2, 3, 3])))