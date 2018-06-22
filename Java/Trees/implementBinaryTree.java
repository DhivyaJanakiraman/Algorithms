class Node {
  int data;
  Node left, right;

  public Node(int item) {
    data = item;
    left = null;
    right = null;
  }
}

class BinaryTree {
  Node root;

  BinaryTree(int data) {
    root = new Node(data);
  }

  BinaryTree() {
    root = null;
  }

  public static void main(String[] args) {
    BinaryTree tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
  }
}