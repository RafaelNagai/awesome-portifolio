import React, { useEffect, useRef, useState } from "react";
import "./fadein.scss";

type FadeInOutProps = {
  children: React.ReactNode;
  isScrollableEvent?: boolean;
  delay?: number;
  directionUp?: boolean;
};

export const FadeInOut: React.FC<FadeInOutProps> = ({
  children,
  isScrollableEvent = true,
  delay = 0,
  directionUp = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    const onScrollHandler = () => {
      if (ref && ref.current) {
        const heightScreen = window.innerHeight;
        const { top } = ref.current.getBoundingClientRect();
        const start = top < heightScreen;
        setTimeout(() => {
          setStartAnimation(start);
        }, delay);
      }
    };
    if (isScrollableEvent) document.addEventListener("scroll", onScrollHandler);
    else onScrollHandler();

    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  const animationClass = directionUp ? "fadeout--up" : "fadeout--down";

  return (
    <div ref={ref} className={`${startAnimation && animationClass}`}>
      {children}
    </div>
  );
};
