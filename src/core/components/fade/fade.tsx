import React, { useEffect, useRef, useState } from "react";
import "./fadein.scss";

export enum directionFade {
  right,
  left,
  up,
  down,
}

type FadeInOutProps = {
  children: React.ReactNode;
  isScrollableEvent?: boolean;
  delay?: number;
  direction?: directionFade;
  className?: string;
};

export const FadeInOut: React.FC<FadeInOutProps> = ({
  children,
  isScrollableEvent = true,
  delay = 0,
  direction = directionFade.up,
  className,
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

  let animationClass;
  switch (direction) {
    case directionFade.up:
      animationClass = "fadeout--up";
      break;
    case directionFade.down:
      animationClass = "fadeout--down";
      break;
    case directionFade.left:
      animationClass = "fadeout--left";
      break;
    case directionFade.right:
      animationClass = "fadeout--right";
      break;
  }

  return (
    <div
      ref={ref}
      className={`${startAnimation && animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
