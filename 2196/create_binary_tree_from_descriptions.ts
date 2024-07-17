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
function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const { nodes, root } = descriptions.reduce(
    ({ nodes, root }, [parentVal, childVal, isLeft]) => {
      let parent = nodes.get(parentVal);
      if (parent === undefined) {
        root.add(parentVal);
        parent = new TreeNode(parentVal);
      }

      const child = nodes.get(childVal) ?? new TreeNode(childVal);
      parent[isLeft === 1 ? "left" : "right"] = child;
      root.delete(childVal);
      return {
        nodes: nodes.set(childVal, child).set(parentVal, parent),
        root,
      };
    },
    { nodes: new Map<number, TreeNode>(), root: new Set<number>() },
  );

  return nodes.get(Array.from(root)[0])!;
}
