class Main {
  public static void moveZeroes(int arr[]) {
    int index = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        arr[index++] = arr[i];
      }
    }
    while (index < arr.length) {
      arr[index++] = 0;
    }
  }

  public static void main(String[] args) {
    int arr[] = { 1, 9, 3, 4, 0, 3, 0, 2, 0, 4, 0 };
    moveZeroes(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }
}

// Input : [1, 9, 3, 4, 0, 3, 0, 2, 0, 4, 0 ]
// Output: 1,9,3,4,3,2,4,0,0,0,0
