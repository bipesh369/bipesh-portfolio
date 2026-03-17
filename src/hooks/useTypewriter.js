import { useState, useEffect } from "react";

/**
 * useTypewriter — type & delete animation
 */
export default function useTypewriter(
  items = [],
  typeSpeed = 90,
  delSpeed = 45,
  pauseMs = 1800
) {
  const [text, setText] = useState("");
  const [itemIndex, setItemIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const current = items[itemIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        const nextText = current.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === current) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        // Deleting
        const nextText = current.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setItemIndex((prev) => (prev + 1) % items.length);
        }
      }
    }, isDeleting ? delSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, itemIndex, items, typeSpeed, delSpeed, pauseMs]);

  return text;
}