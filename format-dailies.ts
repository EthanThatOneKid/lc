if (import.meta.main) {
  for await (const dirEntry of Deno.readDir(".")) {
    const number = Number(dirEntry.name);
    if (!(dirEntry.isDirectory && Number.isInteger(number))) {
      continue;
    }

    const files = await Array.fromAsync(Deno.readDir(dirEntry.name));
    if (files.length !== 1 || !files[0].name.endsWith(".ts")) {
      console.warn(
        `Skipping ${dirEntry.name} because it has ${files.length} files`,
      );
    } else {
      // Assert that the only file in the directory is a TypeScript file named solution.ts.
      await Deno.rename(
        `${dirEntry.name}/${files[0].name}`,
        `${dirEntry.name}/solution.ts`,
      );
    }

    const formattedNumber = number.toString().padStart(4, "0");
    if (formattedNumber === dirEntry.name) {
      continue;
    }

    console.log(`Renaming ${dirEntry.name} to ${formattedNumber}`);
    await Deno.rename(dirEntry.name, formattedNumber);
  }
}
