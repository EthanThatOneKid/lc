if (import.meta.main) {
  for await (const dirEntry of Deno.readDir(".")) {
    const number = Number(dirEntry.name);
    if (!(dirEntry.isDirectory && Number.isInteger(number))) {
      continue;
    }

    const formattedNumber = number.toString().padStart(4, "0");
    if (formattedNumber === dirEntry.name) {
      continue;
    }

    console.log(`Renaming ${dirEntry.name} to ${formattedNumber}`);
    await Deno.rename(dirEntry.name, formattedNumber);
  }
}
