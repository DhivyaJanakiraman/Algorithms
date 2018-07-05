function replaceGivenCharacter(str, c) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== c) {
      result += str[i];
    }
  }
  return result;
}

replaceGivenCharacter("google", "g");
