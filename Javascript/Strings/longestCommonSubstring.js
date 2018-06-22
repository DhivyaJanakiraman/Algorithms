// 2 strings
// longestCommon = "str2[0]";
// str2 - loop

function longestCommonSub(str1, str2) {
  if (str1 === null || str2 === null) {
    return 0;
  }
  var sub = str2.slice();
  var length = str2.length;
  var longestCommon = str2[0];
  for (let j = 0; j < length; j++) {
    var sub = sub.slice(0, -1);
    if (str1.indexOf(sub) >= 0 && sub.length > longestCommon.length) {
      longestCommon = sub;
    }
  }
  sub = str2.slice();
  for (let j = 0; j < length; j++) {
    var sub = sub.slice(1);
    if (str1.indexOf(sub) >= 0 && sub.length > longestCommon.length) {
      longestCommon = sub;
    }
  }
  return longestCommon;
}

longestCommonSub("abcdxyz", "xyzabcd");
