// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var start = 0;
  var end = s.length - 1;
  var temp = "";
  var result = [];
  var re = /[aeiouAEIOU]/g;
  while (start <= end) {
    if (s[start].match(re) !== null && s[end].match(re) !== null) {
      result[start] = s[end];
      result[end] = s[start];
      start++;
      end--;
    } else if (s[start].match(re) !== null && s[end].match(re) === null) {
      result[end] = s[end];
      end--;
    } else if (s[start].match(re) === null && s[end].match(re) !== null) {
      result[start] = s[start];
      start++;
    } else {
      result[start] = s[start];
      result[end] = s[end];
      start++;
      end--;
    }
  }
  return result.join("");
};
