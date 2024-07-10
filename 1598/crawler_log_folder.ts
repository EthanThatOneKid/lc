function minOperations(logs: string[]): number {
    return logs.reduce(
        (depth, log) =>
            log === "../"
                ? depth > 0 ? depth - 1 : 0
                : log === "./"
                ? depth
                : depth + 1,
        0,
    );
}
