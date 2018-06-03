// Given a string, write a function to check if it is permutation of a palindrome.

function checkPalindromePermutation(str) {
  str = str.replace(/\s+/g, "").toLowerCase();
  if (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  }

  var map = {};
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    map[character] = map[character] + 1 || 1;
  }

  let count = 0;
  for (let key in map) {
    count += map[key] % 2;
  }
  return count <= 1;
}

// checkPalindromePermutation('taco Cat')
