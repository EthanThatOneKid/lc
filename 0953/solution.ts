function isAlienSorted(words: string[], order: string): boolean {
  const orderService = createOrderService(order);
  const sortedWords = [...words]
    .sort((a, b) => sortByOrder(orderService, a, b));

  return words.every((word, i) => word === sortedWords[i]);
}

// compareFn Function used to determine the order of the elements.
// It is expected to return a negative value if the first argument
// is less than the second argument, zero if they're equal, and a
// positive value otherwise.

function sortByOrder(
  service: ReturnType<typeof createOrderService>,
  a: string,
  b: string,
) {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    const positionA = service.getLexicographicalPosition(a[i]);
    const positionB = service.getLexicographicalPosition(b[i]);
    if (positionA === undefined || positionB === undefined) {
      throw new Error("Unexpected");
    }

    if (positionA > positionB) {
      return 1;
    } else if (positionB > positionA) {
      return -1;
    }
  }

  if (a.length > b.length) {
    return 1;
  }

  if (b.length > a.length) {
    return -1;
  }

  return 0;
}

function createOrderService(order: string) {
  const lexicographicalPositions = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    lexicographicalPositions.set(order[i], i);
  }

  return {
    getLexicographicalPosition(character: string) {
      return lexicographicalPositions.get(character);
    },
  };
}
