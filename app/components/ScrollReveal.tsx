"use client";

import { useEffect } from "react";

/*
  Reveals any element marked with `data-reveal` when it scrolls into view.

  Usage:
    <div data-reveal="left">   slides in from the left
    <div data-reveal="right">  slides in from the right
    <div data-reveal="up">     rises from below
    <div data-reveal="zoom">   scales in

  Stagger items in a list with style={revealDelay(index)} from siteData.
*/
export default function ScrollReveal() {
  useEffect(() => {
    let timeoutId: number | undefined;

    /*
      State lives in `data-revealed`, an attribute React never renders, so
      it isn't reset when a component re-renders its className / style.

      React still reports *any* attribute added before an element hydrates
      as a mismatch, so we only touch elements React has already hydrated
      (it attaches a `__reactFiber$…` key to every hydrated DOM node).
    */
    const isHydrated = (element: HTMLElement) =>
      Object.keys(element).some((key) => key.startsWith("__reactFiber$"));

    const reveal = (element: HTMLElement) => {
      element.setAttribute("data-revealed", "true");

      // Drop the stagger delay afterwards so hover effects stay instant
      window.setTimeout(() => {
        element.setAttribute("data-revealed", "done");
      }, 1600);
    };

    const check = () => {
      timeoutId = undefined;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // No measurable viewport (e.g. a collapsed embed): reveal everything
      const triggerLine = viewportHeight > 0 ? viewportHeight * 0.92 : Infinity;
      let waitingForHydration = false;

      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((element) => {
          const rect = element.getBoundingClientRect();

          // Skip elements hidden with display:none (e.g. mobile-only blocks)
          if (rect.width === 0 && rect.height === 0) return;

          if (
            rect.top < triggerLine &&
            (rect.bottom > 0 || triggerLine === Infinity)
          ) {
            if (isHydrated(element)) {
              reveal(element);
            } else {
              waitingForHydration = true;
            }
          }
        });

      // Hydration doesn't change the DOM, so poll until it has finished
      if (waitingForHydration) {
        scheduleCheck();
      }
    };

    const scheduleCheck = () => {
      if (timeoutId === undefined) {
        timeoutId = window.setTimeout(check, 80);
      }
    };

    check();

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);

    // Pick up elements rendered later (route changes, pagination, streaming)
    const mutationObserver = new MutationObserver(scheduleCheck);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      mutationObserver.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
