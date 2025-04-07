import React from "react";
import "./introduction-page.scss";
import { IterativeBackground } from "./components/iterative-backgorund/iterative-background";
import icon from "../../../assets/rafael-background.png";
import { AllLanguageButton } from "../../../core/internationalization/components/all-language-button";
import { IterativeTitle } from "./components/iterative-title/iterative-title";

export const IntroductionPage: React.FC = () => {
  return (
    <section>
      <IterativeBackground src={icon}>
        <div className="introduction">
          <AllLanguageButton />
          <div className="introduction__content">
            <IterativeTitle />
          </div>
        </div>
      </IterativeBackground>
    </section>
  );
};
