/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function balanceBST(
  root: TreeNode | null,
): TreeNode | null {
  return (function bstFromArray(
    values: number[],
    lo = 0,
    hi = values.length - 1,
    mid = lo + ~~((hi - lo) * 0.5),
  ): TreeNode | null {
    return lo > hi ? null : new TreeNode(
      values[mid],
      bstFromArray(values, lo, mid - 1),
      bstFromArray(values, mid + 1, hi),
    );
  })((function toArray(node: TreeNode | null): number[] {
    return node === null ? [] : [
      ...toArray(node.left),
      node.val,
      ...toArray(node.right),
    ];
  })(root));
}
