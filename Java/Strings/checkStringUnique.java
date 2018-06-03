// Determine if a string has unique characters without using additional data structures

import java.util.Arrays;

public class Main {
  boolean uniqueCharacters(String str){
    boolean result = false;
    char[] strArr = str.toCharArray();
    Arrays.sort(strArr); 
    for(char c: strArr){
      if(str.indexOf(c) != str.lastIndexOf(c)){
          result = false;
      }else{
        result = true;
      }
    }
    return result;
  }
}