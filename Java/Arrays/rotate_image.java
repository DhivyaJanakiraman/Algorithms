
public class Main {
	
	static void rotateMatrix(int[][] matrix, int n){
		for(int layer=0; layer < n/2; layer++){
			int first = layer;
			int last = n-1-layer;
			for(int i=first; i<last; i++){
				int offset = i - first;
				// save the top value
				int top = matrix[first][i];
				//left to top
				matrix[first][i] = matrix[last-offset][first];
				//bottom to left
				matrix[last-offset][first] = matrix[last][last-offset];
				//right to bottom
				matrix[last][last-offset] = matrix[i][last];
				// top to right
				matrix[i][last] = top;
			}
		}
	}
	// public static void main(String[] args){
		
	// 	int mat[][] = { { 1, 2, 3, 4 },
  //               { 5, 6, 7, 8 },
  //               { 9, 10, 11, 12 } ,
  //               {13, 14, 15, 16}
  //               };
		
	// 	int count = 0;
	// 	for ( int i = 0; i < 4; i++) {
			
	// 		for (int j = 0; j < 4; j++) {
				
	// 			mat[i][j] = count;
	// 			count++;
	// 		}
	// 	}
		
	// 	for ( int i = 0; i < 4; i++) {
	// 		for (int j = 0; j < 4; j++) {	
	// 			System.out.print(" " + mat[i][j]);
	// 		}
	// 		System.out.println("\n");
	// 	}
	// 	rotateMatrix(mat,4);
		
	// 	for ( int i = 0; i < 4; i++) {
			
	// 		for (int j = 0; j < 4; j++) {
				
	// 			System.out.print(" " + mat[i][j]);
	// 		}
	// 		System.out.println("\n");
	// 	}

	// }
}
