function countChar(str) {
  var result = "";
  var count = 1;
  var curr = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      curr = str[i];
      count++;
    } else {
      result += curr + count;
      curr = str[i + 1];
      count = 1;
    }
  }
  return result;
}

countChar("aaabaa");

// Input : "aaabaa" Output: a3b1a2
// Input : "abc" Output: a1b1c1
