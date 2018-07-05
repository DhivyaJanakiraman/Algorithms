/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  var num1Rev = num1
    .split("")
    .reverse()
    .join("");
  var num2Rev = num2
    .split("")
    .reverse()
    .join("");

  var num;
  var index;
  var d = new Array(num1Rev.length + num2Rev.length);
  //var d = [];
  for (let i = 0; i < num1Rev.length; i++) {
    for (let j = 0; j < num2Rev.length; j++) {
      num = +((num1Rev.charAt(i) - "0") * (num2Rev.charAt(j) - "0"));
      d[i + j] = (d[i + j] || 0) + num;
    }
  }
  var s = "";
  for (let k = 0; k < d.length; k++) {
    var mod = d[k] % 10;
    var carry = Math.floor(d[k] / 10);
    if (k + 1 < d.length) {
      d[k + 1] = (d[k + 1] || 0) + carry;
    }
    s += mod;
  }

  s = s
    .split("")
    .reverse()
    .join("");
  if (s[0] === "0") {
    return s.slice(1);
  } else {
    return s;
  }
};
