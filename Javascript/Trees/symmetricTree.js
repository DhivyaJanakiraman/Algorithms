function symmetricTree(root) {
    if(root === null){
        return true;
    }
    return isSymmetricTree(root.left, root.right);
}

function isSymmetricTree(l, r) {
    // check null case
    if(l === null && r === null){
        return true;
    } else if(l === null || r === null){
        return false;
    } 

    if(l.val !== r.val){
        return false;
    }

    if(!isSymmetricTree(l.left, r.right)){
        return false;
    }
    if(!isSymmetricTree(l.right, r.left)){
        return false;
    }

    return true;
}