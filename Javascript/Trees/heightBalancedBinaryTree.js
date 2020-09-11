function heightBalancedBinaryTree(root) {
    if(root === null){
        return true;
    }

    if(getHeight(root) === -1){
        return false;
    }

    return true;
}

function getHeight(root){
    if(root === null){
        return 0;
    }

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    if(left === -1 || right === -1){
        return -1;
    }

    if(Math.abs(left - right) >  1){
        return -1;
    }

    return Math.max(left, right) + 1;
}