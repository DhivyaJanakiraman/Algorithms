// reverse an array without affecting special characters
// time complelxity: O(n) space: O(1)
function reverseArr(arr) {
  arr = arr.split("");
  var start = 0;
  var end = arr.length - 1;
  var temp;
  while (start < end) {
    if (typeof arr[start] !== "string") {
      start++;
    } else if (typeof arr[end] !== "string") {
      end--;
    } else if (typeof arr[start] === "string" && typeof arr[end] === "string") {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr.join("");
  }
}

reverseArr("a,b$c");


// function reverseArr(arr) {
//   arr = arr.split("");
//   var start = 0;
//   var end = arr.length - 1;
//   var lettersRegex = /[a-z]/gi;
//   var result = [];

//   while (start <= end) {
//     if (s[start].match(lettersRegex) !== null && s[end].match(lettersRegex) !== null) {
//       result[start] = s[end];
//       result[end] = s[start];
//       start++;
//       end--;
//     } else if (s[start].match(lettersRegex) !== null && s[end].match(lettersRegex) === null) {
//       result[end] = s[end];
//       end--;
//     } else if (s[start].match(lettersRegex) === null && s[end].match(lettersRegex) !== null) {
//       result[start] = s[start];
//       start++;
//     } else {
//       result[start] = s[start];
//       result[end] = s[end];
//       start++;
//       end--;
//     }
//   }
//   return result;
// }