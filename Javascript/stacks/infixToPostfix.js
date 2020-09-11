/**
 *  Input: 4+8*6-5/3-2*2+2 ==>  486*+53/-22*-2+    
 * 
 * Algorithm:
 *  - Whenever an integer/character comes from expression we append to postfix String
 *  - Whenever a operator comes in we check the precedence of the incoming operator with the 
 *    operator on the top of the stack if the stack is not null
 *  - If the precedence of the incoming operator is lower than or equal to operator on the top of
 *    the stack - Pop the operator on the stack and check the precedence again until the operator
 *    is greater than that of the operator on the stack (except if operator is '^' which has the highest precedence and 
 *    is right associative)
 *  - Append the popped operator to the postFix string
 *  - If there are no expressions left in the stack pop all the operators and append to the string  
 * 
 */

function precedence(operator){
    switch(operator){
        case "+":
        case "-":
            return 1;
        case "*":
        case "/":
            return 2;
        case "^":
            return 3;
        default:
            return 0;
    }
}

function peek(stack) {
   if(stack.length === 0){
       return false;
   }
   return stack[stack.length-1];
}

function infixToPostfix(expression){
    let resultStr = "";
    let stack = [];

    for(let i=0; i < expression.length; i++){
       let c = expression.charAt(i);

       if(!isNaN(parseInt(c))){
           resultStr += c;
       } else if(c === '(') {
            stack.push(c);
       } else if(c === ')'){
           // handle ( and )
           while(stack.length > 0 && peek(stack) !== '('){
               resultStr += stack.pop();
           }

           if(stack.length > 0 && peek(stack) !== '('){
               return "Invalid expression";
           } else {
               stack.pop();
           }
       } else {
           // handle precendence order of operators
           while(stack.length > 0 && precedence(c) <= precedence(peek(stack))){
               resultStr += stack.pop();
           }
           stack.push(c);
       }
    }

   // remove all characters left in the stack
     while(stack.length > 0){
         resultStr += stack.pop();
     }

    return resultStr;

}

var res = infixToPostfix('4+8*6-5/3-2*2+2');
console.log(res);