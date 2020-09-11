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

var findDuplicates = function(nums) {
  var result = [];
  for (let i = 0; i < nums.length; i++) {
   if (nums[Math.abs(nums[i])] > 0 ){
     // mark it negative. mark it as visited
     nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
   } else {
     // already visited value. so it is duplicate
     result.push(Math.abs(nums[i]));
   }
  }
  return result;
};

// alternate approach

// for (int i = 0; i < numRay.length; i++) { 
//   numRay[numRay[i] %  numRay.length] = numRay[numRay[i] %  numRay.length] + numRay.length; 
// } 
// console.log("The repeating elements are : "); 
// for (int i = 0; i < numRay.length; i++) { 
//   if (numRay[i] >= numRay.length*2) { 
//       console.log(i + " "); 
//   } 
// }