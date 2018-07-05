// Time complexity: factorial times
// Space complexity: O(n)

function permutations(str) {
  var map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] + 1 || 1;
  }
  var str1 = [];
  var count = [];
  var index = 0;
  for (var key in map) {
    str1[index] = key;
    count[index] = map[key];
    index++;
  }
  var result = new Array(str.length);
  permUtil(str1, count, result, 0);
}

function permUtil(str, count, result, level) {
  if (level == result.length) {
    printAray(result);
    return;
  }
  for (var i = 0; i < str.length; i++) {
    if (count[i] === 0) {
      continue;
    }
    result[level] = str[i];
    count[i]--;
    permUtil(str, count, result, level + 1);
    count[i]++;
  }
}

function printAray(arr) {
  var result = "";
  for (var key of arr) {
    result += key + " ";
  }
  console.log(result);
}

permutations("AABC");
