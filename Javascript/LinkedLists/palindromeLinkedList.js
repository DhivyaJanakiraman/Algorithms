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

function findMiddle(head) {
  var slow = head;
  var fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverse(node) {
  if (node === null || node.next === null) {
    return node;
  }

  var prev = null;
  var curr = node;
  var next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

var isPalindrome = function(head) {
  var middleNode = findMiddle(head);
  var revNode = reverse(middleNode);
  while (revNode !== null) {
    if (revNode.val !== head.val) {
      return false;
    }
    revNode = revNode.next;
    head = head.next;
  }
  return true;
};
