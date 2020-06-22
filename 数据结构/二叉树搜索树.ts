// 节点
class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 树
class BinarySearchTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  public insert(key: number) {
    const newNode = new TreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  public search(key: number): boolean {
    return this.searchNode(this.root, key);
  }

  public min() {
    return this.minNode(this.root);
  }

  public max() {
    return this.maxNode(this.root);
  }

  public remove() {}
  //   排序
  public inorderTraversal(root: TreeNode | null): number[] {
    let printArr: number[] = [];
    if (root !== null) {
      printArr = [...printArr, ...this.inorderTraversal(root.left)];
      printArr.push(root.val);
      printArr = [...printArr, ...this.inorderTraversal(root.right)];
    }
    return printArr;
  }

  //   辅助函数
  //   搜索
  private searchNode(node: TreeNode | null, key: number): boolean {
    if (node === null) return false;
    if (key < node.val) return this.searchNode(node.left, key);
    if (key > node.val) return this.searchNode(node.right, key);
    return true;
  }
  //   插入
  private insertNode(curNode: TreeNode, newNode: TreeNode) {
    if (newNode.val < curNode.val) {
      if (curNode.left === null) {
        curNode.left = newNode;
      } else {
        this.insertNode(curNode.left, newNode);
      }
    } else {
    }
  }

  //   最小值
  private minNode(node: TreeNode | null): null | number {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node.val;
    }
    return null;
  }

  // 最大值
  private maxNode(node: TreeNode | null): null | number {
    if (node) {
      while (node.right) {
        node = node.right;
      }
      return node.val;
    }
    return null;
  }
}

export {};
