function InOrder(root) {
  if (root == null) {
    return;
  }

  var stack = [];
  var node = root;
  // traverse to leftmost
  while (node !== null) {
    stack.push(node);
    node = node.left;
  }

  while (stack.length > 0) {
    node = stack.pop();
    console.log(node);
    if (node.right !== null) {
      node = node.right;
    }
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
  }
}
