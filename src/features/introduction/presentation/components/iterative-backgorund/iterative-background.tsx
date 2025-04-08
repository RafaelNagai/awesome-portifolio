import React, { useEffect, useRef } from "react";
import "./iterative-background.scss";
import useIsMobile from "../../../../../core/components/mobile/is-mobile";

type IterativeBackgroundProps = {
  delay?: number;
  children: React.ReactNode;
};

export const IterativeBackground: React.FC<IterativeBackgroundProps> = ({
  delay = 10,
  children,
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const isMobile = useIsMobile();

  const setCircleVisible = (show: boolean) => {
    const circles = circlesRef.current;
    const container = backgroundRef.current;
    if (container && circles) {
      if (show) {
        circles.forEach((circle) => {
          circle.classList.remove("iterative-mouse--hide");
        });
      } else {
        circles.forEach((circle) => {
          circle.classList.add("iterative-mouse--hide");
        });
      }
    }
  };

  useEffect(() => {
    const iterativeTitleElement =
      document.querySelector<HTMLDivElement>(".phrase");
    const cursorElement =
      document.querySelector<HTMLDivElement>(".custom-cursor");

    const container = backgroundRef.current;
    const circles = circlesRef.current;

    if (!container || !circles || !cursorElement || !iterativeTitleElement)
      return;

    const onIterativeTitleOver = () => {
      cursorElement.classList.remove("hidden");
      setCircleVisible(false);
    };

    const onIterativeTitleOut = () => {
      cursorElement.classList.add("hidden");
      setCircleVisible(true);
    };

    const onOutOfContainer = (mousePosition: number) => {
      if (
        mousePosition > container.getBoundingClientRect().height ||
        circles[0].classList.contains("iterative-mouse--hide")
      ) {
        setCircleVisible(false);
      } else {
        setCircleVisible(true);
      }
    };

    const onMoveMouse = ({ pageX, pageY }: MouseEvent) => {
      for (let i = 0; i < circles.length; i++) {
        const size = circles[i].getBoundingClientRect().height;
        if (i === 0) {
          onOutOfContainer(pageY);
        }
        setTimeout(() => {
          circles[i].style.top = `${pageY - size / 2}px`;
          circles[i].style.left = `${pageX - size / 2}px`;
        }, delay * i);
      }
    };

    const onUpdateImagePosition = () => {
      circles.forEach((circle: HTMLDivElement) => {
        circle.style.backgroundPositionY = `-${window.scrollY}px`;
      });
    };

    document.addEventListener("mousemove", onMoveMouse);
    document.addEventListener("scroll", onUpdateImagePosition);
    iterativeTitleElement.addEventListener("mouseover", onIterativeTitleOver);
    iterativeTitleElement.addEventListener("mouseout", onIterativeTitleOut);

    return () => {
      document.removeEventListener("mousemove", onMoveMouse);
      document.removeEventListener("scroll", onUpdateImagePosition);
      iterativeTitleElement.removeEventListener(
        "mouseover",
        onIterativeTitleOver
      );
      iterativeTitleElement.removeEventListener(
        "mouseout",
        onIterativeTitleOut
      );
    };
  }, []);

  const onMouseOut = () => {
    setCircleVisible(false);
    document
      .querySelector<HTMLDivElement>(".custom-cursor")!
      .classList.remove("hidden");
  };

  const onMouseOver = () => {
    setCircleVisible(true);
    document
      .querySelector<HTMLDivElement>(".custom-cursor")!
      .classList.add("hidden");
  };

  return (
    <>
      <div
        ref={backgroundRef}
        className="iterative-background"
        onMouseLeave={onMouseOut}
        onMouseEnter={onMouseOver}
      >
        {!isMobile && (
          <div className="iterative-mouse">
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index}
                className={`iterative-mouse__circle iterative-mouse__circle--${index}`}
                ref={(el) => {
                  if (el) circlesRef.current[index] = el;
                }}
              />
            ))}
          </div>
        )}
        {children}
      </div>
    </>
  );
};
