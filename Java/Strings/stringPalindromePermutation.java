// Given a string, write a function to check if it is permutation of a palindrome.

import java.util.HashMap;

public class stringsAlgo {
		
	boolean checkPalindromePermutation(String str){
		str =  str.replaceAll("\\s+","");
		str = str.toLowerCase();
		//System.out.println(str);
		HashMap<Character,Integer> hmap1 = new HashMap<Character,Integer>();
		for(int i=0; i<str.length(); i++){
			if(hmap1.containsKey(str.charAt(i))){
				hmap1.put(str.charAt(i),hmap1.get(str.charAt(i))+1);
			}else{
				hmap1.put(str.charAt(i), 1);
			}
		}
		
		int count = 0;
		for(char key: hmap1.keySet()){
			count += hmap1.get(key) % 2;
		}
		
		return count <= 1;
	}
}
