import { useState, useEffect, useRef } from "react";

/**
 * useIntersect — triggers once when element enters viewport.
 *
 * @param {number} threshold - Visibility ratio (default 0.15)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export default function useIntersect(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (visible) return; // stop observing once triggered

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing after trigger
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, visible]);

  return [ref, visible];
}