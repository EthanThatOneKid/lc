import { LCClient } from "./client.ts";

const lc = new LCClient();

if (import.meta.main) {
  const arg = Deno.args[0];

  if (arg && /^\d+$/.test(arg)) {
    const id = Number(arg);
    const q = await lc.getQuestionById(id);
    const directory = String(q.questionFrontendId).padStart(4, "0");
    await Deno.mkdir(directory, { recursive: true });

    const today = new Date().toISOString().split("T")[0];
    const code =
      `// Title: ${q.questionFrontendId}. ${q.title}\n// URL: https://leetcode.com/problems/${q.titleSlug}/\n// Difficulty: ${q.difficulty}\n// Date: ${today}\n`;
    await Deno.writeTextFile(`${directory}/solution.ts`, code);
  } else {
    const dailyQuestion = await lc.getDailyQuestion();
    const directory = String(dailyQuestion.question.questionFrontendId)
      .padStart(4, "0");
    await Deno.mkdir(directory, { recursive: true });

    const code =
      `// Title: ${dailyQuestion.question.questionFrontendId}. ${dailyQuestion.question.title}\n// URL: https://leetcode.com${dailyQuestion.link}\n// Difficulty: ${dailyQuestion.question.difficulty}\n// Date: ${dailyQuestion.date}\n`;
    await Deno.writeTextFile(`${directory}/solution.ts`, code);
  }
}
