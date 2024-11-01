function isValidSudoku(board: string[][]): boolean {
  const groupFns: GroupFns = new Map(makeGroupFns());
  const groups = new Map<string, Set<string>>();
  for (const [r, c, cell] of walkSudoku(board)) {
    if (cell === ".") {
      continue;
    }

    for (const group of groupsAt(groupFns, r, c)) {
      const groupSet = groups.get(group) ?? new Set<string>();
      if (groupSet.has(cell)) {
        return false;
      }

      groups.set(group, groupSet.add(cell));
    }
  }

  return true;
}

function* walkSudoku(board: string[][]) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      yield [r, c, board[r][c]] as [number, number, string];
    }
  }
}

function groupsAt(groupFns: GroupFns, r: number, c: number): string[] {
  const groups: string[] = [];
  for (const [group, fn] of groupFns) {
    if (!fn(r, c)) {
      continue;
    }

    groups.push(group);
  }

  return groups;
}

/**
 * GroupFns is a mapping of group names to group functions.
 */
type GroupFns = Map<string, GroupFn>;

/**
 * GroupFn tests the group of a cell in a Sudoku board.
 */
type GroupFn = (r: number, c: number) => boolean;

function makeGroupFns(): Array<[string, GroupFn]> {
  return [
    ...makeColumnGroups(),
    ...makeRowGroups(),
    ...makeSubBoxGroups(),
  ];
}

function makeColumnGroups(): Array<[string, GroupFn]> {
  return Array.from(
    { length: 9 },
    (
      _,
      columnGroup,
    ) => [`c${columnGroup}`, (_r: number, c: number) => columnGroup === c],
  );
}

function makeRowGroups(): Array<[string, GroupFn]> {
  return Array.from(
    { length: 9 },
    (
      _,
      rowGroup,
    ) => [`r${rowGroup}`, (r: number, _c: number) => rowGroup === r],
  );
}

function makeSubBoxGroups(): Array<[string, GroupFn]> {
  return Array.from(
    { length: 9 },
    (_, i) => [
      `s${i}`,
      (r: number, c: number) =>
        (Math.floor(r / 3) * 3 + Math.floor(c / 3)) === i,
    ],
  );
}

// deno run 36/valid_sudoku.ts
if (import.meta.main) {
  const input: string[][] = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  console.log(isValidSudoku(input));
}
