/**
 * 
 *  1)Read the Prefix expression in reverse order (from right to left)
    2) If the symbol is an operand, then push it onto the Stack
    3) If the symbol is an operator, then pop two operands from the Stack
    4) Create a string by concatenating the two operands and the operator between them.
    5) string = operand1 + operand2 + operator
    6) And push the resultant string back to Stack
    7) Repeat the above steps until end of Prefix expression.
 */

function isOperator(char){
    switch(char){
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
    }
    return false;
}

function prefixToInfix(expression){
   let stack = [];

   for(let i=expression.length-1; i >= 0; i--){
       let c = expression.charAt(i);

       if(isOperator(c)){
           let operand1 = stack.pop();
           let operand2 = stack.pop();

           let temp = operand1 + operand2 + c;

           stack.push(temp);
       } else {
           stack.push(c);
       }
   }

   return stack[stack.length -1]; // peek
}

// Input :  Prefix :  *+AB-CD
// Output : Postfix : AB+CD-*
// Explanation : Prefix to Infix :  (A+B) * (C-D)
//               Infix to Postfix :  AB+CD-*