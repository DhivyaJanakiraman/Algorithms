/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var stack = [];
  var result = [];
  if (root === null || root.length === 0) {
    return [];
  }
  stack.push(root);
  while (stack.length != 0) {
    var curr = stack.pop();
    result.push(curr.val);
    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
  return result;
};
