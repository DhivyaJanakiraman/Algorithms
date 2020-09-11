/***
 * 
 *  Input: "abbaca"
    Output: "ca"
    Explanation: 
    For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
    and this is the only possible move.  The result of this move is that the string is "aaca",
    of which only "aa" is possible, so the final string is "ca".
 */

var removeDuplicates = function(S) {
    var stack = [];

    if(S.length <= 1){
      return S;
    }

    stack.push(S[0]);
    for(let i=1; i<S.length; i++){
      var curr = S[i];
      var peek = stack[stack.length-1];
      if(peek === curr){
        stack.pop();
      } else {
        stack.push(curr);
      }
    }

    return stack.join('');
};