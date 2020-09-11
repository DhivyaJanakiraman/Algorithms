/**
 * 
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

    For example, given the array [−2,1,−3,4,−1,2,1,−5,4], the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 */

 function maximumSubArraySum(nums){
     let result = nums[0];
     let sum = [];
     sum[0] = nums[0];

     for(let i=1; i<nums.length; i++){
        sum[i] = Math.max(nums[i], sum[i-1]+nums[i]);
        result = Math.max(result, sum[i]);
     }

     return result;
 }

 // Time complexity: o(n)
 // Space complexity: o(n)

 function maximumSubArraySum(nums){
    let result = nums[0];
    sum = nums[0];

    for(let i=1; i<nums.length; i++){
       sum = Math.max(nums[i], sum + nums[i]);
       result = Math.max(result, sum);
    }

    return result;
}

 // Time complexity: o(n)
 // Space complexity: o(1)