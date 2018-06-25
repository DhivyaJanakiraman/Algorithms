/*
  create a stack.
  push root
  while stack not empty, push right child and then left child 
  when they are not null.
*/
function preOrder(root) {
  if (root == null) {
    return;
  }
  var stack = [];
  var node = root;
  stack.push(node);

  while (stack.length !== 0) {
    node = stack.pop();
    console.log(node.val);

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}
