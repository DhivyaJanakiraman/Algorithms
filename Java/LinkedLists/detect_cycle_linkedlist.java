/**
 * Definition for singly-linked list. class ListNode { int val; ListNode next;
 * ListNode(int x) { val = x; next = null; } }
 */
public class Solution {
  public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
      return false;
    }
    ListNode slow = head.next;
    ListNode fast = head.next.next;
    if (fast == null) {
      return false;
    }
    while (slow != fast) {
      if (fast.next == null) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
      if (slow == null || fast == null) {
        return false;
      }
    }
    return true;
  }
}