// reverse an array without affecting special characters

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
