"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

/* Cards visible at Tailwind's md (768px) and lg (1024px) breakpoints */
type PerView = { base: number; md: number; lg: number };

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

/*
  Slider state for a row of cards: how many are visible at the current
  screen size, which one is first, and prev/next that wrap around.
  Autoplays every `interval` ms unless paused (0 disables autoplay).
*/
export function useSlider(count: number, perView: PerView, interval = 0) {
  const visible = useSyncExternalStore(
    subscribe,
    () =>
      window.matchMedia("(min-width: 1024px)").matches
        ? perView.lg
        : window.matchMedia("(min-width: 768px)").matches
          ? perView.md
          : perView.base,
    () => perView.lg,
  );

  const lastStart = Math.max(count - visible, 0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const start = Math.min(index, lastStart);

  const move = useCallback(
    (step: number) => {
      setIndex((current) => {
        const from = Math.min(current, lastStart);
        return (from + step + lastStart + 1) % (lastStart + 1);
      });
    },
    [lastStart],
  );

  useEffect(() => {
    if (
      !interval ||
      paused ||
      lastStart === 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = window.setInterval(() => move(1), interval);
    return () => window.clearInterval(id);
  }, [interval, paused, lastStart, move]);

  return {
    visible,
    start,
    canSlide: lastStart > 0,
    prev: () => move(-1),
    next: () => move(1),
    /* Spread on the slider wrapper to pause autoplay on hover/focus */
    pauseHandlers: {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocusCapture: () => setPaused(true),
      onBlurCapture: () => setPaused(false),
    },
    /* Track transform: each card is 100% / visible of the track width */
    trackStyle: {
      transform: `translateX(-${(start * 100) / visible}%)`,
    },
  };
}
