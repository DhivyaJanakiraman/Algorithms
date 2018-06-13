/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] > 1) {
      return true;
    }
  }
  return false;
};
