// deno run -A 2092/find_all_people_with_secret.ts
if (import.meta.main) {
  const input = await Deno.readTextFile("2092/1184426876");
  const result = findAllPeople(...parseInput(input));
  console.log(result);
}

function parseInput(input: string): Parameters<typeof findAllPeople> {
  const lines = input.split("\r\n");
  return [
    parseInt(lines[0], 10),
    JSON.parse(lines[1]),
    parseInt(lines[2], 10),
  ];
}

type PersonID = number;
type MeetingTime = number;
type Meeting = [PersonID, PersonID, MeetingTime];
type GroupedMeeting = [MeetingTime, Meeting[]];

function findAllPeople(
  _: number,
  meetings: Meeting[],
  firstPerson: PersonID,
): PersonID[] {
  const groupedMeetings = groupMeetings(meetings);
  const secretClub = new Set<PersonID>();
  secretClub.add(0);
  secretClub.add(firstPerson);
  for (const { 1: group } of groupedMeetings) {
    const backtracker = new Map<PersonID, PersonID[]>();

    const addBacktrack = (p1: PersonID, p2: PersonID) => {
      backtracker.set(p1, [...(backtracker.get(p1) ?? []), p2]);
      backtracker.set(p2, [...(backtracker.get(p2) ?? []), p1]);
    };

    const resolveBacktrack = (initial: PersonID) => {
      const people = [initial];
      while (people.length > 0) {
        const p1 = people.pop()!;
        if (!backtracker.has(p1)) {
          continue;
        }

        secretClub.add(p1);
        for (const p2 of backtracker.get(p1) ?? []) {
          secretClub.add(p2);
          people.push(p2);
        }

        backtracker.delete(p1);
      }
    };

    for (const [p1, p2] of group) {
      if (secretClub.has(p1) || secretClub.has(p2)) {
        secretClub.add(p1);
        secretClub.add(p2);

        resolveBacktrack(p1);
        resolveBacktrack(p2);
      } else {
        addBacktrack(p1, p2);
      }
    }
  }

  return [...secretClub];
}

function groupMeetings(meetings: Meeting[]) {
  return Object.entries(
    groupBy(meetings, ({ 2: time }) => time),
  )
    .map(([time, meetings]): GroupedMeeting => {
      return [parseInt(time, 10), meetings ?? []];
    })
    .sort(([a], [b]) => a - b);
}

// deno-lint-ignore no-explicit-any
function groupBy<T, K extends keyof any>(
  arr: T[],
  key: (i: T) => K,
) {
  return arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);
}
