/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest product.

  For example, given the array [2,3,-2,4], the contiguous subarray [2,3] has the largest product = 6.
 */

function maximumProductSubArray(nums){
    let max = [];
    let min= [];
    let result = nums[0];
    max[0] = min[0] = nums[0];

    for(let i=1; i<nums.length; i++){
        if(nums[i] > 0){
            max[i] = Math.max(nums[i], nums[i] * max[i-1]);
            min[i] = Math.min(nums[i], nums[i] * max[i-1]);
        } else {
            max[i] = Math.max(nums[i], nums[i] * min[i-1]);
            min[i] = Math.min(nums[i], nums[i] * max[i-1]);
        }
        result = Math.max(result, max[i]);
    }

    return result;
}

// alternate method

function maximumProductSubArray(nums) {
    curr_max_prod = nums[0];
    prev_max_prod = nums[0];
    prev_min_prod = nums[0];
    result = nums[0];

    for(let i=1; i<nums.length; i++){
        curr_max_prod = Math.max(nums[i] * prev_max_prod, nums[i] * prev_min_prod,nums[i]);
        curr_min_prod = Math.min(nums[i] * prev_max_prod, nums[i] * prev_min_prod,nums[i]);
        result = Math.max(curr_max_prod, result);
        prev_max_prod = curr_max_prod;
        prev_min_prod = curr_min_prod;
    }
    return result;
}

