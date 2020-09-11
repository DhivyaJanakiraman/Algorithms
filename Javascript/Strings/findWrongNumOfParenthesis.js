// find wrong number of parenthesis

function findWrongParenthesis(str) {
  var stack = [];
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      var curr = stack[stack.length - 1];
      if (
        (str[i] === ")" && curr === "(") ||
        (str[i] === "}" && curr === "{") ||
        (str[i] === "]" && curr === "[")
      ) {
        stack.pop();
      } else {
        stack.pop();
        count++;
      }
    }
  }

  while (stack.length > 0) {
    stack.pop();
    count++;
  }
  return count;
}

findWrongParenthesis("{((()}]");
// Input "({((()}])" output: 3

