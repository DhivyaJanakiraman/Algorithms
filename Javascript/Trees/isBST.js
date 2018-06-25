function isBST(root) {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTUtil(root, min, max) {
  //base case
  if (root === null) {
    return true;
  }
  if (root.val < min || root.val > max) {
    return false;
  }

  return (
    isBSTUtil(root.left, min, root.val - 1) &&
    isBSTUtil(root.right, root.val + 1, max)
  );
}
