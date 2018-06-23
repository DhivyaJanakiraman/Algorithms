/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n < 1 || head === null) {
    return head;
  }
  var slow = head;
  var fast = head;
  var prev = null;
  var count = 0;
  while (count !== n) {
    fast = fast.next;
    count++;
  }
  if (fast === null) {
    //special case
    head = head.next;
    return head;
  } else {
    while (slow !== null && fast !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next;
    }
    prev.next = slow.next;
  }
  return head;
};
