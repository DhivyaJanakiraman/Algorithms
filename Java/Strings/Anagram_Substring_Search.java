/*
Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] and its permutations (or anagrams) in txt[]. You may assume that n > m. 

1) Input:  txt[] = "BACDGABCDA"  pat[] = "ABCD"
   Output:   Found at Index 0
             Found at Index 5
             Found at Index 6
2) Input: txt[] =  "AAABABAA" pat[] = "AABA"
   Output:   Found at Index 0
             Found at Index 1
             Found at Index 4
*/

public class Main {

	final int MAX = 256;

	boolean compareArrays(int arr1[], int arr2[]) {
		for (int i = 0; i < MAX; i++) {
			if (arr1[i] != arr2[i]) {
				return false;
			}
		}
		return true;
	}

	void anagramSubstring(String pattern, String text) {
		int P = pattern.length();
		int T = text.length();

		int[] pCount = new int[MAX];
		int[] tCount = new int[MAX];

		for (int i = 0; i < P; i++) {
			(pCount[pattern.charAt(i)])++;
			(tCount[text.charAt(i)])++;
		}
		for (int i = P; i < T; i++) {
			if (compareArrays(pCount, tCount)) {
				System.out.println(i - P + " ");
			}
			(tCount[text.charAt(i)])++;
			(tCount[text.charAt(i - P)])--;
		}
		if (compareArrays(pCount, tCount)) {
			System.out.println(T - P + " ");
		}
	}
}