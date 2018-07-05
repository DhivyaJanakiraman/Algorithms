/* Longest palindromic subsequence
 Given a string, find the longest substring which is palindrome. For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”.
*/

function longestPalindromeSubseq(str, start, end) {
  if (start === end) {
    return 1;
  }

  if (str[start] === str[end] && start + 1 === end) {
    return 2;
  }

  if (str[start] === str[end]) {
    return longestPalindromeSubseq(str, start + 1, end - 1) + 2;
  }

  return Math.max(
    longestPalindromeSubseq(str, start, end - 1),
    longestPalindromeSubseq(str, start + 1, end)
  );
}

longestPalindromeSubseq("geeksforgeeks", 0, 12);

// function isPalindrome(str) {
//   return (
//     str ===
//     str
//       .split("")
//       .reverse()
//       .join("")
//   );
// }

// function longestPalindrome(str) {
//   let i = 0;
//   let j = str.length - 1;
//   let map = {};
//   let word = "";
//   while (i < j) {
//     word = str.substring(i, j + 1);
//     if (isPalindrome(word)) {
//       map[word] = word.length;
//     }
//     i++;
//     j--;
//   }
//   // keeping i constant
//   i = 0;
//   j = str.length - 1;
//   while (i < j) {
//     word = str.substring(i, j + 1);
//     if (isPalindrome(word)) {
//       map[word] = word.length;
//     }
//     j--;
//   }

//   // keeping j constant
//   i = 0;
//   j = str.length - 1;
//   while (i < j) {
//     word = str.substring(i, j + 1);
//     if (isPalindrome(word)) {
//       map[word] = word.length;
//     }
//     i++;
//   }
//   //console.log(map)
//   if (Object.keys(map).length == 0) {
//     return "No palindrome";
//   } else {
//     return Object.keys(map).reduce((a, b) => {
//       return map[a] > map[b] ? a : b;
//     });
//   }
// }

//longestPalindrome('forgeeksskeegfor')
//longestPalindrome('abcdcbabc')

//o(n^2) time and 0(1) space
// function longestPalindromicStr(s){
//   if(s.length <= 0){
//     return s;
//   }

//   var longest = s.substring(0,1);
//   for(let i=0; i<s.length; i++){
//     var result = helper(s,i,i);
//     if(result.length > longest.length){
//       longest = result;
//     }
//     result = helper(s, i, i+1);
//     if(result.length > longest.length){
//       longest = result;
//     }
//   }
//  return longest;
// }

// function helper(str, begin, end){
//   while(begin >=0 && end <= str.length-1 && str.charAt(begin) === str.charAt(end)){
//     begin--;
//     end++;
//   }
//   return str.substring(begin+1,end);
// }

// longestPalindromicStr("forgeeksskeegfor");
