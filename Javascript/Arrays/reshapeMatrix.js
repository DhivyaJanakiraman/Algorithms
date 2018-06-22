/* You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
*/

var matrixReshape = function(nums, r, c) {
  if (nums.length === 0 || r * c !== nums.length * nums[0].length) {
    return nums;
  }
  var result = new Array(r);
  for (let i = 0; i < r; i++) {
    result[i] = new Array(c);
  }
  var row = 0,
    col = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      result[row][col] = nums[i][j];
      col = col + 1;
      if (col === c) {
        row = row + 1;
        col = 0;
      }
    }
  }
  return result;
};
