/*
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T. The same repeated number may be chosen from C unlimited number of times.

Note: All numbers (including target) will be positive integers. Elements in a combination (a1, a2, ... , ak) must be in non-descending order. (ie, a1 <= a2 <= ... <= ak). The solution set must not contain duplicate combinations. For example, given candidate set 2,3,6,7 and target 7, A solution set is:
*/

function combinationSum(arr, target) {
  var result = [];
  if (arr.length === 0 || target === 0) {
    return result;
  }
  arr = arr.sort((a, b) => a - b);
  helper(arr, target, [], result, 0);
  return result;
}

function helper(arr, target, curr, result, j) {
  if (target === 0) {
    var tmp = Array.from(curr);
    result.push(tmp);
    return;
  }

  for (let i = j; i < arr.length; i++) {
    if (target < arr[i]) {
      return;
    }

    curr.push(arr[i]);
    helper(arr, target - arr[i], curr, result, i);
    curr.pop();
  }
}

combinationSum([2, 3, 5, 6, 4], 8);

// [ [ 2, 2, 2, 2 ],
// [ 2, 2, 4 ],
// [ 2, 3, 3 ],
// [ 2, 6 ],
// [ 3, 5 ],
// [ 4, 4 ] ]
