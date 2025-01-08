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

function levelOrder(root: TreeNode | null): number[][] {
  return Array.from(generateLevelOrder(root));
}

function* generateLevelOrder(node: TreeNode | null): Generator<number[]> {
  if (node === null) {
    return;
  }

  let queue: TreeNode[] = [node];
  while (queue.length > 0) {
    const level: number[] = [];
    const nextQueue: TreeNode[] = [];
    for (const node of queue) {
      level.push(node.val);
      if (node.left !== null) {
        nextQueue.push(node.left);
      }

      if (node.right !== null) {
        nextQueue.push(node.right);
      }
    }

    yield level;
    queue = nextQueue;
  }
}
