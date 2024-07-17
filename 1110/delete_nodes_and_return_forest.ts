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
function delNodes(
  root: TreeNode | null,
  to_delete: number[],
): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];
  const set = new Set(to_delete);

  function dfs(node: TreeNode | null, isRoot: boolean): TreeNode | null {
    if (!node) {
      return null;
    }

    const isDeleted = set.has(node.val);
    if (isRoot && !isDeleted) {
      result.push(node);
    }

    node.left = dfs(node.left, isDeleted);
    node.right = dfs(node.right, isDeleted);
    return isDeleted ? null : node;
  }

  dfs(root, true);
  return result;
}
