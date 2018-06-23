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
var detectCycle = function(head) {
  if (head === null) {
    return head;
  }
  var hasCycle = false;

  var slow = head;
  var fast = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (hasCycle) {
    slow = head;
    while (slow !== null && fast !== null) {
      if (slow === fast) {
        return slow;
      }
      slow = slow.next;
      fast = fast.next;
    }
  } else {
    return null;
  }
};
