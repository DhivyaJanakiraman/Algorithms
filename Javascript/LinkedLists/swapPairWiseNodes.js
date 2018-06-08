/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  var x = head;
  var y = head.next;
  var temp = null;

  while (x != null && y != null) {
    temp = x.val;
    x.val = y.val;
    y.val = temp;

    if (y.next == null || y.next.next == null) {
      break;
    }
    x = x.next.next;
    y = y.next.next;
  }
  return head;
};
