/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var q1 = [];
  var q2 = [];
  var result = [];
  if (root === null) {
    return result;
  }
  q1.push(root);
  result.push([root.val]);
  var q2_val = [];
  while (q1.length !== 0) {
    q2 = [];
    q2_val = [];
    while (q1.length !== 0) {
      var popVal = q1.shift();
      if (popVal.left !== null) {
        q2.push(popVal.left);
        q2_val.push(popVal.left.val);
      }
      if (popVal.right != null) {
        q2.push(popVal.right);
        q2_val.push(popVal.right.val);
      }
    }
    if (q2_val.length > 0) {
      result.push(q2_val);
    }
    q1 = q2;
  }
  return result;
};
