class Main {
  static int getMaxCount(int arr[]) {
    int max = 0;
    int count = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        count++;
      } else {
        count = 0;
      }
      max = Math.max(count, max);
    }
    return max;
  }

  public static void main(String[] args) {
    int arr[] = { 1, 1, 1, 0, 0, 1, 1, 1, 1 };
    int res = getMaxCount(arr);
    System.out.println(res);
  }
}

// Input: [1,1,1,0,0,1,1,1,1] output: 4