/*
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(count, max);
  }
  return max;
};

// Input: [0,0,0,1,1,0,1,0] Output: 2
