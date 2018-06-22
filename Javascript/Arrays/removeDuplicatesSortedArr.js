function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

removeDuplicates([0, 0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 9]);
// [0,1,2,3,4,5,6,7,8,9]
