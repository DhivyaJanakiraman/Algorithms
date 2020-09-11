function lowestCommonAncestorBST(root, p, q){
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestorBST(root.left, p, q);
    } else if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestorBST(root.right, p, q);
    } else {
        return root;
    }
}