import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind Merge package is used to merge class names in a way that last class always wins.
// clsx is used for conditional class names to avoid string concatenation.
/**
 * Merge class names using clsx and tailwind-merge
 * @param inputs - Class values to merge
 * @returns Merged class names
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
