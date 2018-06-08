/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    if (l1 == null && l2 == null) {
      return new ListNode(0);
    }
    Stack<Integer> s1 = new Stack<Integer>();
    Stack<Integer> s2 = new Stack<Integer>();
    Stack<Integer> s3 = new Stack<Integer>();
    int carry = 0;
    int sum = 0;
    int x, y;

    if (l1 == null) {
      return l2;
    } else if (l2 == null) {
      return l1;
    }

    while (l1 != null) {
      s1.push(l1.val);
      l1 = l1.next;
    }

    while (l2 != null) {
      s2.push(l2.val);
      l2 = l2.next;
    }

    while (!s1.empty() || !s2.empty()) {
      x = s1.empty() ? 0 : s1.pop();
      y = s2.empty() ? 0 : s2.pop();
      sum = x + y + carry;
      carry = sum > 9 ? Math.round(sum / 10) : 0;
      s3.push(sum % 10);
    }

    if (carry == 1) {
      s3.push(carry);
    }

    ListNode newNode = new ListNode(s3.pop());
    ListNode p = newNode;
    while (!s3.empty()) {
      p.next = new ListNode(s3.pop());
      p = p.next;
    }
    return newNode;
  }
}