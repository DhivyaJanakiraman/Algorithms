/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  if (S === "" || T === "") {
    return false;
  }
  var s1 = "";
  var t1 = "";
  var length = S.length > T.length ? S.length : T.length;
  for (let i = 0; i < length; i++) {
    if (S[i] === "#") {
      s1 = s1.slice(0, -1);
    } else if (S[i] !== "#") {
      s1 = s1 + (S[i] || "");
    }
    if (T[i] === "#") {
      t1 = t1.slice(0, -1);
    } else if (T[i] !== "#") {
      t1 = t1 + (T[i] || "");
    }
  }
  return s1 === t1;
};
