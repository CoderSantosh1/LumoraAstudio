import type { CSSProperties } from "react";

/* ================================================= */
/* SHARED UI HELPERS */
/* Site content lives in /data/*.json (types in /types). */
/* ================================================= */

/* Gold script accent (Allura). font-size-adjust scales Allura's small
   letters up so headings sized for the previous script font still match. */
export const scriptFont: CSSProperties = {
  fontFamily: 'var(--font-allura), "Segoe Script", cursive',
  /* String on purpose: React would turn a number into "0.4px" */
  fontSizeAdjust: "0.4",
  fontWeight: 400,
};

/* Stagger delay for `data-reveal` items in a list (see ScrollReveal.tsx) */
export function revealDelay(index: number, step = 120): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}
