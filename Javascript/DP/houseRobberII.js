/*
After robbing those houses on that street, the thief has found himself a new place for his 
thievery so that he will not get too much attention. This time, all houses at this place are 
arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, 
the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine 
the maximum amount of money you can rob tonight without alerting the police.

This is an extension of House Robber. There are two cases here 1) 1st element is included and last is 
not included 2) 1st is not included and last is included.
Hint: we can use the similar dynamic programming approach to scan the array twice and get the larger value.
*/

function houseRobberII(nums){
    if(nums === null || nums.length === 0){
        return 0;
    }

    if(nums.length === 1){
        return nums[0];
    }

    let max1 = houseRobberHelper(nums, 0, nums.length-2);
    let max2 = houseRobberHelper(nums, 1, nums.length-1);
}

function houseRobberHelper(nums, i, j){
    if(i === j){
        return nums[i];
    }

    let dp = [];
    dp[i] = nums[i];
    dp[i+1] = Math.max(dp[i], nums[i+1]);

    for(let k = i+2; k<=j ;k++){
        dp[k] = Math.max(nums[k] + dp[k-2], dp[k-1]);
    }

    return dp[j];
}