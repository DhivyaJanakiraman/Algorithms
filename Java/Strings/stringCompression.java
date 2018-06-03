// Perform string compression based on counts of repeated characters.
// Eg 'aabcccccaaa' -> 'a2b1c5a3'. If compressed string length is greater than
// original string length, return the input string

public class Solution{
	  String stringCompression(String str){
	  String result = "";
	  HashMap<Character, Integer> hmap = new HashMap<Character, Integer>();
	  hmap.put(str.charAt(0), 1);
	  for(int i=1; i<str.length(); i++){
	    char curr = str.charAt(i);

	    if(hmap.containsKey(curr)){
	    	hmap.put(curr, hmap.get(curr) + 1);
	    }else{
	    	for(char c: hmap.keySet()){
	    		result = result + c + hmap.get(c);
	    	}
	    	hmap.clear();
	    	hmap.put(curr, 1);
	    }
	   }
	   for(char c: hmap.keySet()){
		    result = result + c + hmap.get(c);
	   }
     
	   return result.length() > str.length() ? str : result;
	 }
}