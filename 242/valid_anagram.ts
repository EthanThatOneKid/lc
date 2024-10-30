function isAnagram(s: string, t: string): boolean {
    return compareFreakies(
        makeFreaky(s),
        makeFreaky(t),
    );
}

function makeFreaky(s: string): Map<string, number> {
    const freaky = new Map<string, number>();
    for (const c of s) {
        freaky.set(
            c,
            (freaky.get(c) ?? 0) + 1,
        );
    }

    return freaky;
}

function compareFreakies(
    f1: Map<string, number>,
    f2: Map<string, number>,
): boolean {
    if (f1.size !== f2.size) {
        return false;
    }

    for (const [k, v] of f1) {
        if (f2.get(k) !== v) {
            return false;
        }
    }

    return true;
}
