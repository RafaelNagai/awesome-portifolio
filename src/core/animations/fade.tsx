import React, { useEffect, useRef, useState } from "react";
import "./fadein.scss";

type FadeInOutProps = {
  children: React.ReactNode;
};

export const FadeInOut: React.FC<FadeInOutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    const onScrollHandler = () => {
      if (ref && ref.current) {
        const heightScreen = window.innerHeight;
        const { top } = ref.current.getBoundingClientRect();
        const start = top < heightScreen;
        setStartAnimation(start);
      }
    };
    document.addEventListener("scroll", onScrollHandler);

    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, []);
  return (
    <div ref={ref} className={`${startAnimation && "fadeout"}`}>
      {children}
    </div>
  );
};
