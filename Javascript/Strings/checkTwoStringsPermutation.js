// Given two strings, check to see if one is the permutation of the other

function checkTwoStringsPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var map1 = {};
  var map2 = {};
  for (let i = 0; i < str1.length; i++) {
    map1[str1[i]] = map1[str1[i]] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    map2[str2[i]] = map2[str2[i]] + 1 || 1;
  }

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
}
