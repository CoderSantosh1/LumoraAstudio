import type { CSSProperties } from "react";

/* ================================================= */
/* SHARED UI HELPERS */
/* Site content lives in /data/*.json (types in /types). */
/* ================================================= */

export const scriptFont = {
  fontFamily: '"Segoe Script", "Brush Script MT", cursive',
};

/* Stagger delay for `data-reveal` items in a list (see ScrollReveal.tsx) */
export function revealDelay(index: number, step = 120): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}
