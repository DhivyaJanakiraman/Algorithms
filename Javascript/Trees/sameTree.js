/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // base case
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  } else {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
};

//          5
//       /     \
//     3        9
//   /  \      /  \
// 2     4     8   10

// var t1 = new TreeNode(5);
// t1.left = new TreeNode(3);
// t1.left.left = new TreeNode(2);
// t1.left.right = new TreeNode(4);

// t1.right = new TreeNode(9);
// t1.right.left = new TreeNode(8);
// t1.right.right = new TreeNode(10);


// var t2 = new TreeNode(5);
// t2.left = new TreeNode(3);
// t2.left.left = new TreeNode(2);
// t2.left.right = new TreeNode(4);

// t2.right = new TreeNode(9);
// t2.right.left = new TreeNode(8);
// t2.right.right = new TreeNode(10);