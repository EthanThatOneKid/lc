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

function balanceBST(root: TreeNode | null): TreeNode | null {
  return bstFromArray(toArray(root));
}

function bstFromArray(
  values: number[],
  left = 0,
  right = values.length - 1,
  mid = left + ~~((right - left) * 0.5),
): TreeNode | null {
  if (left > right) {
    return null;
  }

  return new TreeNode(
    values[mid],
    bstFromArray(values, left, mid - 1),
    bstFromArray(values, mid + 1, right),
  );
}

function toArray(node: TreeNode | null): number[] {
  if (!node) {
    return [];
  }

  return [
    ...toArray(node.left),
    node.val,
    ...toArray(node.right),
  ];
}
