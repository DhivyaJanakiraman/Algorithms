function twoSum(arr, target) {
  var map = {};
  var diff = 0;
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (map[diff] === undefined) {
      map[arr[i]] = i;
    } else {
      return [map[target - arr[i]], i];
    }
  }
}

twoSum([5, 1, 3, 8], 4);
