function swapNodes(A, B, head) {
  if (A === B) {
    return;
  }
  var prevA = null;
  var currA = head;

  while (currA != null && currA.val !== A) {//A.val
    prevA = currA;
    currA = currA.next;
  }

  var prevB = null;
  var currB = head;

  while (currB != null && currB.val !== B) {
    prevB = currB;
    currB = currB.next;
  }

  if (currA === null || currB === null) {
    return;
  }

  // swap next pointers of prevA and prevB
  if (prevA === null) {
    // head
    head = currB;
  } else {
    prevA.next = currB;
  }

  if (prevB === null) {
    head = currA;
  } else {
    prevB.next = currA;
  }

  // swap next pointers of currA and currB
  var temp = currA.next;
  currA.next = currB.next;
  currB.next = temp;
}
