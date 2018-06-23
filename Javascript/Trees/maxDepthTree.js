/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  var lDepth = maxDepth(root.left);
  var rDepth = maxDepth(root.right);
  return 1 + Math.max(lDepth, rDepth);
};
