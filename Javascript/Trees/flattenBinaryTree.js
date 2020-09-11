function flattenBinaryTree(root){
    let stack = [];
    let node = root;

    //Go down the tree to the left, when the right child is not null, push the right child to the stack.
    while(stack.length > 0 || node !== null)  {
        if(node.right !== null) {
            stack.push(node.right);
        }

        if(node.left !== null) {
            node.right = node.left;
            node.left = null;
        } else if(stack.length > 0){
            let temp = stack.pop();
            node.right = temp;
        }
        node = node.right;
    }
}

/**
 *       1
        / \
       2   5
      / \   \
     3   4   6

Flattened list:   
  1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
 */