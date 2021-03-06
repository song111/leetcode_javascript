//  思考：利用递归的方式遍历所有节点，遍历一个节点用sum 减去这个节点值，到最后sum==0 且没有节点可以遍历为止
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root: any, sum: number): boolean {
  if (root === null) return false;
  sum = sum - root.val;
  if (root.right === null && root.left === null) {
    return sum === 0;
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
