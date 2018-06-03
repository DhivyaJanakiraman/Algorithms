// Given two strings, check to see if one is the permutation of the other

import java.util.HashMap;

public class checkTwoStringsPermutation {
	 boolean checkPermutation(String str1, String str2){
		    if(str1.length() != str2.length()){
		      return false;
		    }
		    HashMap<Character,Integer> hmap1 = new HashMap<Character,Integer>();
		    HashMap<Character,Integer> hmap2 = new HashMap<Character,Integer>();

		    for(int i=0; i<str1.length(); i++){
		      if(hmap1.containsKey(str1.charAt(i))){
		        hmap1.put(str1.charAt(i), hmap1.get(str1.charAt(i))+1);
		      }else{
		        hmap1.put(str1.charAt(i),1);
		      }
		    }
		    for(int i=0; i<str2.length(); i++){
			      if(hmap2.containsKey(str2.charAt(i))){
			        hmap2.put(str2.charAt(i), hmap2.get(str2.charAt(i))+1);
			      }else{
			        hmap2.put(str2.charAt(i),1);
			      }
			    }
		    
		    if(hmap1.keySet().size() != hmap2.keySet().size()){
		    	return false;
		    }
		    
		    for(Character key : hmap1.keySet()){
		    	if(hmap1.get(key) != hmap2.get(key)){
		    		return false;
		    	}
		    }
		    return true;
}
