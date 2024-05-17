export function removeLeafNodes(
  root: TreeNode | null,
  target: number,
): TreeNode | null {
  return root === null
    ? null
    : ((left, right) =>
      root.val === target && left === null && right === null
        ? null
        : new TreeNode(root.val, left, right))(
        removeLeafNodes(root.left, target),
        removeLeafNodes(root.right, target),
      );
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
