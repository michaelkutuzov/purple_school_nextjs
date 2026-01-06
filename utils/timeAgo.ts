const rtf = new Intl.RelativeTimeFormat("ru", {
  numeric: "always", // или 'auto' → 'вчера', 'завтра'
  style: "long", // 'short' / 'narrow' по вкусу
});

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 1000 * 60 * 60 * 24 * 365],
  ["month", 1000 * 60 * 60 * 24 * 30],
  ["week", 1000 * 60 * 60 * 24 * 7],
  ["day", 1000 * 60 * 60 * 24],
  ["hour", 1000 * 60 * 60],
  ["minute", 1000 * 60],
  ["second", 1000],
];

export function formatRelativeTime(date: Date | string | number) {
  const target = new Date(date);
  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  const abs = Math.abs(diffMs);

  for (const [unit, ms] of UNITS) {
    if (abs >= ms || unit === "second") {
      const value = Math.round(diffMs / ms);
      return rtf.format(value, unit);
    }
  }
}
