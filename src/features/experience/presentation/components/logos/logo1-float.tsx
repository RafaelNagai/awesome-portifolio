import React from "react";
import { HorizontalParallax } from "../../../../../core/components/parallax/horizontal-parallax";
import android from "../../../../../assets/logos/android-logo.png";
import flutter from "../../../../../assets/logos/flutter-logo.png";
import "./logo-float.scss";

export const Logo1Float: React.FC = () => {
  const onAndroidProgress = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translate(-${progress * (width * 0.2)}px, ${
      progress * 100
    }px) rotate(${20 * progress}deg)`;
  };

  const onFlutterProgress = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translate(-${progress * (width * 0.6)}px, -${
      progress * 40
    }px) rotate(${-10 * progress}deg)`;
  };

  return (
    <div className="logo">
      <HorizontalParallax
        selectorTarget=".item-1"
        side="right"
        onProgress={onAndroidProgress}
      >
        <img className="logo__android" src={android} />
      </HorizontalParallax>

      <HorizontalParallax
        selectorTarget=".item-1"
        side="right"
        onProgress={onFlutterProgress}
      >
        <img className="logo__flutter" src={flutter} />
      </HorizontalParallax>
    </div>
  );
};
