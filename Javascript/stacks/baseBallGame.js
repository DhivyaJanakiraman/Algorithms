/*
You're now a baseball game point recorder.
Example 1:
Input: ["5","2","C","D","+"]
Output: 30
Explanation: 
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get 2 points. The sum is: 7.
Operation 1: The round 2's data was invalid. The sum is: 5.  
Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
*/
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var s = [];
  var sum = 0;
  var double = 0;
  for (let i = 0; i < ops.length; i++) {
    var curr = ops[i];
    switch (curr) {
      case "C":
        sum = sum - s.pop();
        break;
      case "D":
        double = s[s.length - 1] * 2;
        s.push(double);
        sum = sum + double;
        break;
      case "+":
        var inter = s[s.length - 1] + s[s.length - 2];
        s.push(inter);
        sum = sum + inter;
        break;
      default:
        curr = parseInt(curr);
        sum = sum + curr;
        s.push(curr);
    }
  }
  return sum;
};

// Input : ["5","-2","4","C","D","9","+","+"]
// Output: 27
