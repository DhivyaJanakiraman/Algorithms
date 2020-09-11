function maximumPathSum(root){
    let max = [];
    max[0] = Number.MIN_VALUE;
    findMaxPathSum(root, max);
    return max[0];
}

function findMaxPathSum(root, max) {
    if(root === null) {
        return 0;
    }

    let left = findMaxPathSum(root.left, max);
    let right = findMaxPathSum(root.right, max);

    let current = Math.max(root.val , Math.max(root.val+left, root.val+right));

    max[0] = Math.max(max[0], Math.max(current, left+root.val+right));

    return current;
}