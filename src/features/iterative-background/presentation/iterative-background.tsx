import React, { useEffect } from "react";
import "./iterative-background.scss";
import useIsMobile from "../../../core/components/mobile/is-mobile";

type IterativeBackgroundProps = {
  src: string;
  delay?: number;
  children: React.ReactNode;
};

export const IterativeBackground: React.FC<IterativeBackgroundProps> = ({
  src,
  delay = 10,
  children,
}) => {
  const isMobile = useIsMobile();

  const setCircleVisible = (show: boolean) => {
    const circles = document.querySelectorAll<HTMLDivElement>(
      ".iterative-mouse__circle"
    );
    const container = document.querySelector<HTMLDivElement>(
      ".iterative-background"
    );
    if (container && circles) {
      if (show) {
        container.style.cursor = "none";
        circles.forEach((circle) => {
          circle.classList.remove("iterative-mouse--hide");
        });
      } else {
        container.style.cursor = "auto";
        circles.forEach((circle) => {
          circle.classList.add("iterative-mouse--hide");
        });
      }
    }
  };

  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(
      ".iterative-background"
    );
    const circles = document.querySelectorAll<HTMLDivElement>(
      ".iterative-mouse__circle"
    );
    const onOutOfContainer = (mousePosition: number) => {
      if (container) {
        if (mousePosition > container.getBoundingClientRect().height) {
          setCircleVisible(false);
        } else {
          setCircleVisible(true);
        }
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

    const hideCurrentCursor = () => {
      const cursor = document.querySelector<HTMLDivElement>(".custom-cursor");
      cursor!.style.display = "none";
    };

    const showCurrentCursor = () => {
      const cursor = document.querySelector<HTMLDivElement>(".custom-cursor");
      cursor!.style.display = "block";
    };

    if (!isMobile) {
      document.addEventListener("mousemove", onMoveMouse);
      document.addEventListener("scroll", onUpdateImagePosition);
      container?.addEventListener("mouseenter", hideCurrentCursor);
      container?.addEventListener("mouseleave", showCurrentCursor);
    }
    return () => {
      document.removeEventListener("mousemove", onMoveMouse);
      document.removeEventListener("scroll", onUpdateImagePosition);
      container?.removeEventListener("mouseenter", hideCurrentCursor);
      container?.removeEventListener("mouseleave", showCurrentCursor);
    };
  }, []);

  const backgroundUrl = {
    backgroundImage: `url(${src})`,
  };

  const onMouseLeave = () => {
    setCircleVisible(false);
  };

  const onMouseEnter = () => {
    setCircleVisible(true);
  };

  return (
    <div
      className="iterative-background"
      style={backgroundUrl}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {!isMobile && (
        <div className="iterative-mouse">
          {Array(15)
            .fill(1)
            .map((_, index) => (
              <div
                key={index}
                className={`iterative-mouse__circle iterative-mouse__circle--${index}`}
                style={{
                  ...backgroundUrl,
                }}
              />
            ))}
        </div>
      )}
      {children}
    </div>
  );
};
