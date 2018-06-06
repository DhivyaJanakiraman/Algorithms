/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = null;
  if (l1 === null && l2 === null) {
    return result;
  }
  if (l1 === null && l2 !== null) {
    result = l2;
    return result;
  }
  if (l1 !== null && l2 === null) {
    result = l1;
    return result;
  }

  if (l1.val <= l2.val) {
    result = l1;
    result.next = mergeTwoLists(l1.next, l2);
  } else {
    result = l2;
    result.next = mergeTwoLists(l1, l2.next);
  }
  return result;
};
