private static boolean checkBracesSequence(String string) {
  Stack st = new Stack();
  
  for(char c: string.toCharArray()) {
    if( c != ')' && c != '}' && c!= ']') {
      st.push(c);
    } 
    else {
      int count =0;
      while(!st.isEmpty()) {
        char t = st.pop().toString().charAt(0);
        if(t =='(' || t == '{' || t == '[') {
          if(count == 0) {
            System.out.println("Extra Brackets");
            return false;
          }
          if(c == ')' && t == '(') {
            break;
          } else if(c=='}' && t=='{') {
            break;
          } else if (c==']' && t=='[') {
            break;
          }
        }
        
        count++;
      }
    }
  }
  
while(!st.isEmpty()) {
  char t = st.pop().toString().charAt(0);
  if(t =='(' || t == '{' || t == '['){
    return false;
  }
}

return true;
  
}