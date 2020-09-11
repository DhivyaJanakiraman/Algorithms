function kthSmallestElement(root,k) {
    let stack = [];
    let node = root;
    let result = 0;

    while(stack.length > 0 || node !== null) {
        if(node !== null){
            stack.push(node);
            node = node.left;
        } else {
            let tNode = stack.pop();
            k--;
            if(k === 0){
                result = tNode.val;
            }
            node = tNode.right;
        }
    }
    return result;
}