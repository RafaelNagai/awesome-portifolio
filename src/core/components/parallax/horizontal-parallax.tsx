import React, { useEffect, useRef } from "react";
import "./horizontal-parallax.scss";

type HorizontalParallaxProps = {
  selectorTarget: string;
  children: React.ReactNode;
  side: string;
  onProgress: (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => void;
};

export const HorizontalParallax: React.FC<HorizontalParallaxProps> = ({
  selectorTarget,
  children,
  side,
  onProgress,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.querySelector<HTMLDivElement>(selectorTarget);
    const handleScroll = () => {
      const { top, height } = target!.getBoundingClientRect();
      const scrollY = window.scrollY;
      const maxScroll = top + height;
      let progress = scrollY / maxScroll;
      if (progress >= 1) {
        progress = 1;
      }

      if (ref.current && target) {
        onProgress(progress, ref.current, target);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`parallax ${
        side === "right" ? "parallax--right" : "parallax--left"
      }`}
    >
      {children}
    </div>
  );
};
