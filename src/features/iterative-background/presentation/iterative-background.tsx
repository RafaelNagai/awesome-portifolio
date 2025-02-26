import React, { useRef, useState } from "react";
import "/css/features/iterative-background/presentation/sass/iterative-background.css";

type IterativeBackgroundProps = {
  src: string;
  sizeCircle: number;
  delay?: number;
  children: React.ReactNode;
};

export const IterativeBackground: React.FC<IterativeBackgroundProps> = ({
  src,
  sizeCircle,
  delay = 10,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [position1, setPosition1] = useState({ top: "0px", left: "0px" });
  const [position2, setPosition2] = useState({ top: "0px", left: "0px" });
  const [position3, setPosition3] = useState({ top: "0px", left: "0px" });
  const [position4, setPosition4] = useState({ top: "0px", left: "0px" });
  const [position5, setPosition5] = useState({ top: "0px", left: "0px" });
  const [position6, setPosition6] = useState({ top: "0px", left: "0px" });
  const [position7, setPosition7] = useState({ top: "0px", left: "0px" });
  const [position8, setPosition8] = useState({ top: "0px", left: "0px" });
  const [position9, setPosition9] = useState({ top: "0px", left: "0px" });
  const [position10, setPosition10] = useState({ top: "0px", left: "0px" });
  const [position11, setPosition11] = useState({ top: "0px", left: "0px" });
  const [position12, setPosition12] = useState({ top: "0px", left: "0px" });
  const [position13, setPosition13] = useState({ top: "0px", left: "0px" });
  const [position14, setPosition14] = useState({ top: "0px", left: "0px" });
  const [position15, setPosition15] = useState({ top: "0px", left: "0px" });
  const defaultCicleSize = sizeCircle;

  const positions = [
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    position10,
    position11,
    position12,
    position13,
    position14,
    position15,
  ];

  const sets = [
    setPosition1,
    setPosition2,
    setPosition3,
    setPosition4,
    setPosition5,
    setPosition6,
    setPosition7,
    setPosition8,
    setPosition9,
    setPosition10,
    setPosition11,
    setPosition12,
    setPosition13,
    setPosition14,
    setPosition15,
  ];

  const onMoveMouse = (event: React.MouseEvent) => {
    const size = ref.current?.offsetWidth || 0;

    // event.clientY > ref.current?.style.display = "none"

    // event;
    // if (event.clientY > 200 && ref.current) {
    //   ref.current.style.display = "none";
    // }

    console.log(event.clientX + " / " + (event.clientX - size / 2));

    const otherPosition = () => {
      return {
        top: `${event.clientY - size / 2}px`,
        left: `${event.clientX - size / 2}px`,
      };
    };

    sets.forEach((item, index) => {
      setTimeout(() => {
        item(otherPosition());
      }, delay * index);
    });
  };

  const backgroundUrl = {
    backgroundImage: `url(${src})`,
  };

  const size = (value: number) => {
    return {
      height: `${value}rem`,
      width: `${value}rem`,
    };
  };

  return (
    <div
      className="iterative-background"
      onMouseMove={onMoveMouse}
      style={backgroundUrl}
    >
      <div ref={ref}>
        {positions.map((item, index) => (
          <div
            className="iterative-mouse"
            style={{
              ...item,
              ...backgroundUrl,
              ...size(defaultCicleSize * (1 - index / positions.length)),
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
