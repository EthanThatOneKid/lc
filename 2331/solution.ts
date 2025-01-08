export function evaluateTree(root: TreeNode | null): boolean {
  return root!.val < 2 ? root!.val === 1 : [
    (a: boolean, b: boolean) => a || b,
    (a: boolean, b: boolean) => a && b,
  ][root!.val - 2](evaluateTree(root!.left), evaluateTree(root!.right));
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
