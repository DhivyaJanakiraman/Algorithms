var isValid = function (str) {

    const obj = { "(": ")", "{": "}", "[": "]" };
    const stack = [];
  
    for (let char of str) {
      if (obj.hasOwnProperty(char)) {
        stack.push(char)
      } else {
        let closeChar = stack.pop();
        if (char !== obj[closeChar]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };

  /**
   * n - num of elements in stack
   * Time complexity - o(n)
   * Space complexity - o(n)
   */