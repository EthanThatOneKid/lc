export function removeLeafNodes(
  root: TreeNode | null,
  target: number,
): TreeNode | null {
  return root === null
    ? null
    : ((node) =>
      node.val === target && node.left === null && node.right === null
        ? null
        : node)({
        val: root.val,
        left: removeLeafNodes(root.left, target),
        right: removeLeafNodes(root.right, target),
      });
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
