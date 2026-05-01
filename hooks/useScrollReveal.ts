import { useEffect } from "react";

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to every element with the class
 * `.reveal` or `.reveal-left` on mount and tears it down on unmount.
 *
 * Expects these CSS rules to exist globally:
 *
 *   .reveal, .reveal-left {
 *     opacity: 0;
 *     transform: translateY(32px);   /* or translateX(-32px) for reveal-left *\/
 *     transition: opacity 0.65s ease, transform 0.65s ease;
 *   }
 *   .reveal.is-visible, .reveal-left.is-visible {
 *     opacity: 1;
 *     transform: none;
 *   }
 *
 * Safe to call from multiple components — each call creates its own
 * observer that scopes to the elements not yet marked as visible.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    // Guard: skip on server (SSR / Next.js)
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.is-visible), .reveal-left:not(.is-visible)"
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
