/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }
  var p1 = head;
  var p2 = head.next;
  var linkNode = head.next;
  while (p2 !== null && p2.next !== null) {
    p1.next = p2.next;
    p1 = p1.next;

    p2.next = p1.next;
    p2 = p2.next;
  }
  p1.next = linkNode;
  return head;
};
