var productExceptSelf = function(nums) {
  var leftProd = 1;
  var rightProd = 1;
  var leftArr = [];
  var rightArr = [];
  var result = [];

  leftArr[0] = 1;
  for (var i = 1; i < nums.length; i++) {
    leftProd = leftProd * nums[i - 1];
    leftArr[i] = leftProd;
  }

  rightArr[nums.length - 1] = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    rightProd = rightProd * nums[j + 1];
    rightArr[j] = rightProd;
  }

  for (let k = 0; k < nums.length; k++) {
    result[k] = leftArr[k] * rightArr[k];
  }
  return result;
};

productExceptSelf([1, 2, 3, 4]);


// alternate

// var productExceptSelf = function(nums) {
//   var result = [];
//   var product = null;

//   for(let i=0; i<nums.length; i++){
//     product = 1;
//     for(let j=0; j<nums.length; j++){
//       if(i === j){
//         continue;
//       } else {
//         product = product * nums[j];
//       }
//     }
//     result.push(product);
//   }
//   return result;
// };