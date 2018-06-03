// Three types of edits can be performed on a string. Insert a character, //remove or replace a character.
// Given two strings, find if they are one or zero edits away.

function compareStrings(str1, str2) {
  let length = str1.length > str2.length ? str1.length : str2.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (str1[i] !== str2[i]) {
      count += 1;
    }
  }
  return count <= 1;
}
