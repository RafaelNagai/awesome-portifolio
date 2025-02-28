import React from "react";
import { HorizontalParallax } from "../../../../../core/components/parallax/horizontal-parallax";
import android from "../../../../../assets/logos/android-logo.png";
import "./logo.scss";

export const AndroidFloat: React.FC = () => {
  const onProgress1 = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translateX(${progress * (width / 3)}px) rotate(${
      30 * progress
    }deg)`;
    element.style.marginTop = `${progress * 100}px`;
  };

  const onProgress2 = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translateX(${progress * (width / 2)}px) rotate(${
      -20 * progress
    }deg)`;
  };

  return (
    <div className="android-logo">
      <HorizontalParallax
        selectorTarget=".item-1"
        side="left"
        onProgress={onProgress1}
      >
        <img className="android-logo--2" src={android} />
      </HorizontalParallax>
      <HorizontalParallax
        selectorTarget=".item-1"
        side="left"
        onProgress={onProgress2}
      >
        <img className="android-logo--1" src={android} />
      </HorizontalParallax>
    </div>
  );
};
