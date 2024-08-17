import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent || event instanceof TouchEvent) {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        callback(event);
      } else if (event instanceof KeyboardEvent && event.key === "Escape") {
        callback(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", listener); // Listen for keydown events

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", listener);
    };
  }, [ref, callback]);
};
