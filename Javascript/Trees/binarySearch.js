// iterative
function BinarySearch(arr, data) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = low + (high - end) / 2;
    if (data === arr[mid]) {
      return mid;
    } else if (data < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

// recursive

function BinarySearch(arr, low, high, data) {
  var mid = low + (high - low) / 2;
  if (arr[mid] === data) {
    return mid;
  }
  if (arr[mid] < data) {
    return BinarySearch(arr, mid + 1, high, data);
  } else if (mid > data) {
    return BinarySearch(arr, low, mid - 1, data);
  }
  return false;
}
