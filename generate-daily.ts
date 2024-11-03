import { LCClient } from "https://github.com/acmcsufoss/lc-dailies/raw/933acc4c393903b2d74d02c7b45a048764692cc1/lib/lc/client.ts";

const lc = new LCClient();

if (import.meta.main) {
  // TODO: Generate LC question by number in Deno.args[0].
  const dailyQuestion = await lc.getDailyQuestion();
  const directory = dailyQuestion.number.toString().padStart(4, "0");
  await Deno.mkdir(directory);

  const filename = dailyQuestion.title.toLowerCase().replace(/[^a-z0-9]/g, "_");
  const code =
    `// Title: ${dailyQuestion.number}. ${dailyQuestion.title}\n// URL: ${dailyQuestion.url}\n// Difficulty: ${dailyQuestion.difficulty}\n// Date: ${dailyQuestion.date}\n`;
  await Deno.writeTextFile(`${directory}/${filename}.ts`, code);
}
