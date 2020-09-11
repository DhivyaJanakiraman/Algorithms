// Recursive top-bottom
function invertBinaryTree(root){
    helper(root);
    return root;
}

function helper(n){
    if(n === null){
        return;
    }

    let tmp = n.left;
    n.left = n.right;
    n.right = tmp;

    helper(n.left);
    helper(n.right);
}

// Recursive bottom-top
function invertBinaryTree(root){
    if(root === null){
        return root;
    }

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    return root;
}

// Iterative

function invertTree(root){
    let queue = [];

    if(root !== null){
        queue.add(root);
    }

    while(queue.length !== 0){
        let node = queue.poll();
        if(node.left !== null){
            queue.add(node.left);
        }
        if(node.right !== null){
            queue.add(node.right);
        }

        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
    return root;
}

   

   