/**
 * Utility helpers
 */

/** Merge class names (minimal replacement for clsx without a dep) */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a date string for display */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
  });
}
