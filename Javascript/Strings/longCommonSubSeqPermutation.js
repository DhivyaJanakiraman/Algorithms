//Longest common subsequence with permutations allowed
/*
Input  :  str1 = "pink", str2 = "kite"
Output : "ik" 
The string "ik" is the longest sorted string 
whose one permutation "ik" is subsequence of
"pink" and another permutation "ki" is 
subsequence of "kite". 

Input  : str1 = "working", str2 = "women"
Output : "now"

Input  : str1 = "geeks" , str2 = "cake"
Output : "ek"

Input  : str1 = "aaaa" , str2 = "baba"
Output : "aa"
*/

function longestCommonSubSeq(str1, str2) {
  var map1 = {};
  var map2 = {};
  for (let i = 0; i < str1.length; i++) {
    map1[str1[i]] = map1[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    map2[str2[i]] = map2[str2[i]] + 1 || 1;
  }

  var result = "";
  var num;
  for (let key in map1) {
    if (map1[key] === undefined) {
      map1[key] = 0;
    } else if (map2[key] === undefined) {
      map2[key] = 0;
    }
    num = Math.min(map1[key], map2[key]);
    for (let i = 0; i < num; i++) {
      result += key;
    }
  }
  return result
    .split("")
    .sort((a, b) => a > b)
    .join("");
}

longestCommonSubSeq("working", "women");
