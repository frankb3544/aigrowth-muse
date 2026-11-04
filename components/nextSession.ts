/**
 * The weekly live build session: Thursdays, 6:00 PM in Charlotte
 * (America/New_York). Pure helpers — the caller passes "now" in, so no
 * wall-clock reads happen during render.
 */

const NY_TZ = "America/New_York";

const WEEKDAYS: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function nyParts(ms: number) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: NY_TZ,
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date(ms));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    weekday: WEEKDAYS[get("weekday")] ?? 0,
    year: parseInt(get("year"), 10),
    month: parseInt(get("month"), 10),
    day: parseInt(get("day"), 10),
    hour: parseInt(get("hour"), 10) % 24,
    minute: parseInt(get("minute"), 10),
    second: parseInt(get("second"), 10),
  };
}

/** UTC timestamp for a wall-clock time in New York. */
function nyWallToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute = 0,
): number {
  const target = Date.UTC(year, month - 1, day, hour, minute, 0);
  let guess = target;
  for (let i = 0; i < 3; i++) {
    const p = nyParts(guess);
    const shown = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    const diff = target - shown;
    if (diff === 0) break;
    guess += diff;
  }
  return guess;
}

/**
 * Timestamp of the next session start. Today counts when it is a
 * Thursday in New York and 6:00 PM has not yet passed there.
 */
export function nextSessionTimestamp(nowMs: number): number {
  const p = nyParts(nowMs);
  let addDays = (4 - p.weekday + 7) % 7;
  if (
    addDays === 0 &&
    (p.hour > 18 || (p.hour === 18 && (p.minute > 0 || p.second > 0)))
  ) {
    addDays = 7;
  }
  const date = new Date(Date.UTC(p.year, p.month - 1, p.day + addDays));
  return nyWallToUtc(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    18,
    0,
  );
}

/** "Thursday, November 12" — the session date, in New York time. */
export function formatSessionDate(ts: number): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: NY_TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(ts));
}
