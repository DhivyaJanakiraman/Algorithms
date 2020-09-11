function hasPathSumII(root, sum) {
    let paths = [];
    findPaths(root, sum, [] ,paths)
    return paths;
}

function findPaths(root, sum, current, paths) {
    if(root === null){
        return;
    }

    current.push(root.val);
    if(root.val === sum && root.left === null && root.right === null){
        paths.push(current);
        return;
    }

    findPaths(root.left, sum - root.val, [].concat(current), paths);
    findPaths(root.right, sum - root.val, [].concat(current), paths);
}