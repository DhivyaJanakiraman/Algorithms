/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }

  var slow = head.next;
  var fast = head.next.next;

  if (fast === null) {
    return false;
  }

  while (slow !== fast) {
    if (fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      return false;
    }
    if (slow === null || fast === null) {
      return false;
    }
  }
  return true;
};
