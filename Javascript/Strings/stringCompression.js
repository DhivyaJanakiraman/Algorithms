// Perform string compression based on counts of repeated characters.
// Eg 'aabcccccaaa' -> 'a2b1c5a3'. If compressed string length is greater than
// original string length, return the input string

function compressString(str) {
  let map = {};
  let result = "";
  map[str[0]] = 1;
  for (let i = 1; i < str.length; i++) {
    if (!map[str[i]]) {
      result = result + (Object.keys(map)[0] + Object.values(map)[0]);
      map = {};
      map[str[i]] = 1;
    } else if (map[str[i]]) {
      map[str[i]] = map[str[i]] + 1;
    }
  }
  result = result + (Object.keys(map)[0] + Object.values(map)[0]);
  return result.length > str.length ? str : result;
}
