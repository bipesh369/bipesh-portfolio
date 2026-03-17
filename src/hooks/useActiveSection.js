import { useState, useEffect } from "react";

/**
 * Tracks active section using IntersectionObserver
 */
export default function useActiveSection(sectionIds, threshold = 0.35) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        threshold,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, threshold]);

  return [active, setActive];
}