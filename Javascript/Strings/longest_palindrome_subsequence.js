/* Longest palindromic subsequence
 Given a string, find the longest substring which is palindrome. For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”.
*/

function isPalindrome(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

function longestPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let map = {};
  let word = "";
  while (i < j) {
    word = str.substring(i, j + 1);
    if (isPalindrome(word)) {
      map[word] = word.length;
    }
    i++;
    j--;
  }
  // keeping i constant
  i = 0;
  j = str.length - 1;
  while (i < j) {
    word = str.substring(i, j + 1);
    if (isPalindrome(word)) {
      map[word] = word.length;
    }
    j--;
  }

  // keeping j constant
  i = 0;
  j = str.length - 1;
  while (i < j) {
    word = str.substring(i, j + 1);
    if (isPalindrome(word)) {
      map[word] = word.length;
    }
    i++;
  }
  //console.log(map)
  if (Object.keys(map).length == 0) {
    return "No palindrome";
  } else {
    return Object.keys(map).reduce((a, b) => {
      return map[a] > map[b] ? a : b;
    });
  }
}

//longestPalindrome('forgeeksskeegfor')
//longestPalindrome('abcdcbabc')
