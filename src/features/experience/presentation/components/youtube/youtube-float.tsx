import React from "react";
import { HorizontalParallax } from "../../../../../core/components/parallax/horizontal-parallax";
import pubdev from "../../../../../assets/logos/pubdev-logo.png";
import "./youtube-float.scss";

export const YoutubeFloat: React.FC = () => {
  const onProgress1 = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translateX(${
      progress * (width * 0.3)
    }px) rotate(${20 * progress}deg)`;
  };

  return (
    <div className="youtube">
      <HorizontalParallax
        selectorTarget=".item-2"
        side="left"
        onProgress={onProgress1}
      >
        <img className="youtube__pubdev" src={pubdev} />
      </HorizontalParallax>
    </div>
  );
};
