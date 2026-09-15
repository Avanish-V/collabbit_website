import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // If running on server or reduced motion preferred
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document
        .querySelectorAll(
          ".reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-fade, [data-reveal]",
        )
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optionally stop observing once revealed
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-fade:not(.is-visible), [data-reveal]:not(.is-visible)",
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check on dynamic mutations or window resize
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
