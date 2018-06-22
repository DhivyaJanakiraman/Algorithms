/**
 * @param {number[]} nums
 * @return {number[]}
 */

// o(n) and without space
var findDuplicates = function(nums) {
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    var val = Math.abs(nums[i]) - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    } else {
      result.push(val + 1);
    }
  }
  return result;
};
