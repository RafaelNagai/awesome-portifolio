import React, { useEffect, useRef } from "react";
import "./custom-mouse.scss";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-hover], [data-invert]"
      );
      if (target && target.dataset.hover === "true")
        cursor.classList.add("hover");
      if (target && target.dataset.invert === "true")
        cursor.classList.add("invert");
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-hover], [data-invert]"
      );
      if (target && target.dataset.hover === "true")
        cursor.classList.remove("hover");
      if (target && target.dataset.invert === "true")
        cursor.classList.remove("invert");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};
