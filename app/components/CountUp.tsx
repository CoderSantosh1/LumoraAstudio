"use client";

import { useEffect, useRef } from "react";

/*
  Counts a stat like "50+" or "1,200" up from 0 when it scrolls into view.
  The server-rendered text is the final value, so it reads correctly without JS.
*/
export default function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const match = value.match(/^(\D*)([\d,]+)(.*)$/);

    if (
      !element ||
      !match ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const format = (n: number) =>
      `${prefix}${digits.includes(",") ? n.toLocaleString("en-US") : n}${suffix}`;

    let frame = 0;
    let started = false;

    const start = () => {
      started = true;
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);

      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = format(Math.round(target * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    function check() {
      if (started || !element) return;
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
        start();
      }
    }

    // Written directly (not via state) so React's text stays untouched
    element.textContent = format(0);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      element.textContent = value;
    };
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
}
