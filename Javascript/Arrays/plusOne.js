function plusOne(arr) {
  var carry = 1;
  var sum = 0;
  var result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    sum = arr[i] + carry;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
      result[i] = sum;
    } else {
      result[i] = sum;
      carry = 0;
    }
  }
  if (carry === 1) {
    result.unshift(carry);
  }
  return result;
}

plusOne([9, 9, 9]);
// [1,0,0,0]
