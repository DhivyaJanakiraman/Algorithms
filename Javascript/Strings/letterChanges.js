function LetterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function(ch) {
    if (ch === "z" || ch === "Z") {
      return "a";
    } else {
      return String.fromCharCode(ch.charCodeAt(0) + 1);
    }
  });
  var result = str.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return result;
}

LetterChanges("sentence");
