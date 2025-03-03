import React from "react";
import { HorizontalParallax } from "../../../../../core/components/parallax/horizontal-parallax";
import csharp from "../../../../../assets/logos/csharp-logo.png";
import react from "../../../../../assets/logos/react-logo.png";
import "./logo-float.scss";

export const Logo2Float: React.FC = () => {
  const onReactProgress = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translate(-${
      progress * (width * 0.3)
    }px, -150px) rotate(${-20 * progress}deg)`;
  };

  const onCsharpProgress = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translate(-${progress * (width * 0.4)}px, ${
      progress * 40
    }px) rotate(${-40 * progress}deg)`;
  };

  return (
    <div className="logo">
      <HorizontalParallax
        selectorTarget=".item-3"
        side="right"
        onProgress={onReactProgress}
      >
        <img className="logo__react" src={react} />
      </HorizontalParallax>
      <HorizontalParallax
        selectorTarget=".item-3"
        side="right"
        onProgress={onCsharpProgress}
      >
        <img className="logo__csharp" src={csharp} />
      </HorizontalParallax>
    </div>
  );
};
