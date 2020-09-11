function postOrder(root) {
    let res = [];

    if(root === null){
        return res;
    }

    let stack = [];
    let node = root;

    stack.push(node);

    while(stack.length > 0){
        let tmp = stack.peek();
        if(tmp.left === null && tmp.right === null){
            let remNode = stack.pop();
            res.push(remNode.val);
        } else {
            if(tmp.right !== null){
                stack.push(tmp.right);
                tmp.right = null;
            }

            if(tmp.left !== null){
                stack.push(tmp.left);
                tmp.left = null;
            }
        }
    }
    return res;
}