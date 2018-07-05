/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  return minPathSumHelper(0, 0, grid);
};

function minPathSumHelper(i, j, grid) {
  if (i === grid.length - 1 && j === grid[0].length - 1) {
    return grid[i][j];
  }

  if (i < grid.length - 1 && j < grid[0].length - 1) {
    var r1 = grid[i][j] + minPathSumHelper(i + 1, j, grid);
    var r2 = grid[i][j] + minPathSumHelper(i, j + 1, grid);
    return Math.min(r1, r2);
  }

  if (i < grid.length - 1) {
    return grid[i][j] + minPathSumHelper(i + 1, j, grid);
  }

  if (j < grid[0].length - 1) {
    return grid[i][j] + minPathSumHelper(i, j + 1, grid);
  }
  return 0;
}
