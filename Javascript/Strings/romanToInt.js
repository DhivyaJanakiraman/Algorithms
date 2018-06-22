function romanToInt(roman) {
  var rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var sum = 0;
  for (let i = 0; i < roman.length; i++) {
    var val1 = rom[roman[i]];
    var val2 = rom[roman[i + 1]];
    if (val2 > val1) {
      sum = sum + val2 - val1;
      i++;
    } else {
      sum = sum + val1;
    }
  }
  return sum;
}

romanToInt("XXV");
