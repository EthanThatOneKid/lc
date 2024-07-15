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
    const nodes = descriptions.reduce((map, [parentVal, childVal, isLeft]) => {
        const parent = map.get(parentVal) ?? new TreeNode(parentVal);
        parent[
            isLeft === 1 ? "left" : "right"
        ] = map.get(childVal) ?? new TreeNode(childVal);
        return map.set(parentVal, parent);
    }, new Map<number, TreeNode>());
    return findRoot(nodes);
}

/**
 * findRoot returns the root of the tree.
 */
function findRoot(nodes: Map<number, TreeNode>): TreeNode | null {
    return Array.from(nodes).find(([_, node]) => checkRoot(node, nodes))?.[1] ??
        null;
}

/**
 * checkRoot returns true if the given node is the root of the tree.
 */
function checkRoot(
    node: TreeNode | null,
    nodes: Map<number, TreeNode>,
): boolean {
    if (node === null) {
        return true;
    }

    for (const [_, n] of nodes) {
        if (n.left?.val !== node.val && n.right?.val !== node.val) {
            continue;
        }

        return false;
    }

    return true;
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
