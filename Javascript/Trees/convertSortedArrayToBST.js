class TreeNode{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function convertSortedArrayToBST(nums){
    if(nums === null){
        return nums;
    }
    return sortedArrayToBST(nums, 0, nums.length-1);
}

function sortedArrayToBST(nums, start, end) {
    if(start > end){
        return null;
    }

    let mid = (start+end)/2;
    let tNode = new TreeNode(nums[mid]);
    tNode.left = sortedArrayToBST(nums, start, mid-1);
    tNode.right = sortedArrayToBST(nums, mid+1, end);

    return tNode;
}