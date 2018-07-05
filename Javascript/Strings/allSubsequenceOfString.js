// print all subsequence of a string

// Time complexity: O(2^n)
// Space complexity: O(n)

function printSubSeq(input) {
  var map = {};
  for (let i = 0; i < input.length; i++) {
    map[input[i]] = map[input[i]] + 1 || 1;
  }

  var index = 0;
  var str = [];
  var count = [];

  for (let key in map) {
    str[index] = key;
    count[index] = map[key];
    index++;
  }
  console.log("str count ", str, count);
  var output = new Array(input.length);
  printSubSeqHelper(str, count, 0, output, 0);
}

function printSubSeqHelper(str, count, pos, output, index) {
  printArr(output, index);

  for (let i = pos; i < str.length; i++) {
    if (count[i] === 0) {
      continue;
    }
    output[index] = str[i];
    count[i]--;
    printSubSeqHelper(str, count, i, output, index + 1);
    count[i]++;
  }
}

function printArr(arr, len) {
  var resultStr = "";
  for (let i = 0; i < len; i++) {
    resultStr += arr[i];
  }
  console.log(resultStr);
}

printSubSeq("ABC");

// Input : "ABC"
//Output: str count  [ 'A', 'B', 'C' ] [ 1, 1, 1 ]

// A
// AB
// ABC
// AC
// B
// BC
// C
