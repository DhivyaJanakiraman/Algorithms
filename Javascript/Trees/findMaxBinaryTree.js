function findMax(root) {
  var max = Number.MIN_VALUE;
  var leftMax = Number.MIN_VALUE;
  var rightMax = Number.MIN_VALUE;

  if (root == null) {
    return max;
  } else {
    leftMax = findMax(root.left);
    rightMax = findMax(root.right);
    max = Math.max(root.val, Math.max(leftMax, rightMax));
    return max;
  }
}
