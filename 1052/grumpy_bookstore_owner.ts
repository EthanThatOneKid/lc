function maxSatisfied(
    customers: number[],
    grumpy: number[],
    minutes: number,
): number {
    return (({ satisfied, recordSatisfied }) => satisfied + recordSatisfied)(
        customers.reduce(
            (
                {
                    satisfied: previousSatisfied,
                    windowSatisfied: previousWindowSatisfied,
                    recordSatisfied: previousRecordSatisfied,
                },
                customer,
                i,
                _,
                satisfied = previousSatisfied +
                    (grumpy[i] === 0 ? customer : 0),
                windowSatisfied = previousWindowSatisfied +
                    (grumpy[i] !== 0 ? customer : 0) -
                    (i >= minutes
                        ? grumpy[i - minutes] * customers[i - minutes]
                        : 0),
                recordSatisfied = Math.max(
                    previousRecordSatisfied,
                    windowSatisfied,
                ),
            ) => ({ satisfied, windowSatisfied, recordSatisfied }),
            { satisfied: 0, recordSatisfied: 0, windowSatisfied: 0 },
        ),
    );
}
