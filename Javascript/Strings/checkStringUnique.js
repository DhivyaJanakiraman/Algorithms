// Determine if a string has unique characters without using additional data structures

function checkStringUnique(str) {
  if (str === "") {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

// checkStringUnique('');
// checkStringUnique('apple');
// checkStringUnique('unique');
