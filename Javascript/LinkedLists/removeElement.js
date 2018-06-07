/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var curr, prev;
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) {
    return null;
  }
  curr = head;
  prev = null;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
