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

function bstToGst(root: TreeNode | null, sum = 0): TreeNode | null {
    return (function dfs(
        node: TreeNode | null,
        right = node !== null ? dfs(node.right) : null,
    ): TreeNode | null {
        return node === null ? null : new TreeNode(
            sum += node.val,
            dfs(node.left),
            right,
        );
    })(root);
}
