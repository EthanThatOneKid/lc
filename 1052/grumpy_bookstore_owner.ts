function maxSatisfied(
    customers: number[],
    grumpy: number[],
    minutes: number,
): number {
    // WIP: https://pastebin.com/7KMD2vWW
    const { satisfied, maxSatisfied } = customers.reduce(
        ({ satisfied, maxSatisfied, windowSatisfied }, customer, i) => {
            if (grumpy[i] === 0) {
                satisfied += customer;
            } else {
                windowSatisfied += customer;
            }

            if (i >= minutes) {
                windowSatisfied -= grumpy[i - minutes] * customers[i - minutes];
            }

            return {
                satisfied,
                maxSatisfied: Math.max(maxSatisfied, windowSatisfied),
                windowSatisfied,
            };
        },
        { satisfied: 0, maxSatisfied: 0, windowSatisfied: 0 },
    );

    return satisfied + maxSatisfied;
}
