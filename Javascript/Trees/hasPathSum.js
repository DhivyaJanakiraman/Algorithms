/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }
  function hasPathSumHelper(root, sum) {
    if (root === null) {
      return sum === 0;
    }
    var diff = sum - root.val;
    if (
      (root.left !== null && root.right !== null) ||
      (root.left === null && root.right === null)
    ) {
      return (
        hasPathSumHelper(root.left, diff) || hasPathSumHelper(root.right, diff)
      );
    } else if (root.left !== null && root.right === null) {
      return hasPathSumHelper(root.left, diff);
    } else if (root.left === null && root.right !== null) {
      return hasPathSumHelper(root.right, diff);
    }
  }
  return hasPathSumHelper(root, sum);
};
