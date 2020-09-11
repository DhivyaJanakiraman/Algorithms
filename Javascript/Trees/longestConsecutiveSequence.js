function longestConsecutiveSequence(root){
    let max = [];
    helper(root, 0, 0, max);
    return max[0];
}

function helper(root, count, target, max){
    if(root === null){
        return;
    } else if(root.val === target){
        count++;
    } else {
        count = 1;
    }

    max[0] = Math.max(max, count);
    helper(root.left, count, root.val+1, max);
    helper(root.left, count, root.val+1, max);
}

// time complexity: o(n)
// space complexity: o(n) [worst case]