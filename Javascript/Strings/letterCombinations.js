/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/

/* 
  Time Complexity - O(m^n) m-length of str at each level and n- no of levels
  i.e "abc" - m and n = 2 levels

    a       b      c
    |       |       |
   d e f  d e f  d e f  
   [ad, ae, af, bd,be, bf, cd, ce, cf]
*/

function letterCombinations(digits) {
  var map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  var result = [];
  var str = "";
  if (digits === "") {
    return result;
  }
  helper(result, str, digits, 0, map);
  return result;
}

function helper(result, str, digits, idx, map) {
  if (idx >= digits.length) {
    result.push(str);
    return;
  }

  var c = digits.charAt(idx);
  var arr = map[c];

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    helper(result, str, digits, idx + 1, map);
    str = str.slice(0, -1);
  }
}

letterCombinations("23");
