// pangram checking
/*
Given a string check if it is Pangram or not. A pangram is a sentence containing every letter in the English Alphabet.

Examples : The quick brown fox jumps over the lazy dog ” is a Pangram [Contains all the characters from ‘a’ to ‘z’]
“The quick brown fox jumps over the dog” is not a Pangram [Doesn’t contains all the characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing]
 */

function pangram(str) {
  str = str.toLowerCase();
  var map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]] && str[i] !== " ") {
      map[str[i]] = 1;
    }
  }
  return 26 === Object.values(map).reduce((a, b) => a + b, 0);
}

pangram("The quick brown fox jumps over the lazy dog");
// true;
