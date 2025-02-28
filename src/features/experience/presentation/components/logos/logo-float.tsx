import React from "react";
import { HorizontalParallax } from "../../../../../core/components/parallax/horizontal-parallax";
import android from "../../../../../assets/logos/android-logo.png";
import csharp from "../../../../../assets/logos/csharp-logo.png";
import flutter from "../../../../../assets/logos/flutter-logo.png";
import react from "../../../../../assets/logos/react-logo.png";
import "./logo-float.scss";

export const LogoFloat: React.FC = () => {
  const onProgress1 = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translateX(-${
      progress * (width / 3)
    }px) rotate(${30 * progress}deg)`;
    element.style.marginTop = `${progress * 100}px`;
  };

  const onProgress2 = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translateX(-${
      progress * (width / 2)
    }px) rotate(${-20 * progress}deg)`;
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

  const onCsharpProgress = (
    progress: number,
    element: HTMLDivElement,
    target: HTMLDivElement
  ) => {
    const { width } = target.getBoundingClientRect();
    element.style.transform = `translate(-${progress * (width * 0.2)}px, -${
      progress * 40
    }px) rotate(${-40 * progress}deg)`;
  };

  return (
    <div className="logo">
      <HorizontalParallax
        selectorTarget=".item-1"
        side="right"
        onProgress={onProgress2}
      >
        <img className="logo__react" src={react} />
      </HorizontalParallax>
      <HorizontalParallax
        selectorTarget=".item-1"
        side="right"
        onProgress={onProgress1}
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
      <HorizontalParallax
        selectorTarget=".item-1"
        side="right"
        onProgress={onCsharpProgress}
      >
        <img className="logo__csharp" src={csharp} />
      </HorizontalParallax>
    </div>
  );
};
