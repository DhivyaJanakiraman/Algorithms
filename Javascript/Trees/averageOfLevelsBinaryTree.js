/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
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
var averageOfLevels = function(root) {
  var parentQ = [];
  var childQ = [];
  var result = [];
  if (root == null) {
    return result;
  } else {
    parentQ.push(root);
    while (parentQ.length !== 0) {
      var sum = 0;
      childQ = [];
      var divisor = parentQ.length;
      while (parentQ.length !== 0) {
        var popVal = parentQ.shift();
        sum = sum + popVal.val;
        if (popVal.left !== null) {
          childQ.push(popVal.left);
        }
        if (popVal.right !== null) {
          childQ.push(popVal.right);
        }
      }
      result.push(sum / divisor);
      parentQ = childQ;
    }
    return result;
  }
};
