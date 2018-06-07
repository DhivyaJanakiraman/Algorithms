/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  var currA = headA;
  var currB = headB;

  var lengthA = 0;
  var lengthB = 0;
  while (currA !== null) {
    lengthA = lengthA + 1;
    currA = currA.next;
  }
  while (currB !== null) {
    lengthB = lengthB + 1;
    currB = currB.next;
  }
  var diff;
  if (lengthA > lengthB) {
    diff = lengthA - lengthB;
    for (let i = 0; i < diff; i++) {
      headA = headA.next;
    }
  } else if (lengthB > lengthA) {
    diff = lengthB - lengthA;
    for (let i = 0; i < diff; i++) {
      headB = headB.next;
    }
  }

  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA;
    }
    if (headA.next === headB.next) {
      return headA.next;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};
