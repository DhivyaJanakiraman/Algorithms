// find power of a number

// function power(num, exp){
//   var result = 1;
//   if(exp === 0){
//     return 1;
//   }
//   for(let i=0; i<exp; i++){
//     result = result * num;
//   }
//   return result;
// }

// log(n)

function power(num, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return num;
  }
  if (exp % 2 === 1) {
    return num * power(num, exp - 1);
  } else {
    var n = power(num, exp / 2);
    return n * n;
  }
}
power(2, 4);
