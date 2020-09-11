function getMinDepth(root){
    if(root === null){
        return 0;
    }

    if(root.left === null && root.right === null){
        return 1;
    }

    let leftDepth = root.left !== null ? getMinDepth(root.left) : Number.MAX_VALUE;
    let rightDepth = root.right !== null ? getMinDepth(root.right) : Number.MAX_VALUE;

    return 1 + Math.min(leftDepth, rightDepth);
}