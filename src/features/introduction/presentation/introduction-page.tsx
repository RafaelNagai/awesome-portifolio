import React from "react";
import "./introduction-page.scss";
import { IterativeBackground } from "./components/iterative-background";
import icon from "../../../assets/rafael-background.png";
import { useTranslation } from "react-i18next";
import { AllLanguageButton } from "../../../core/internationalization/components/all-language-button";
import profile from "../../../assets/rafael-background.png";
import useIsMobile from "../../../core/components/mobile/is-mobile";

export const IntroductionPage: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile();

  return (
    <IterativeBackground src={icon}>
      <div className="introduction">
        <AllLanguageButton />
        <div className="introduction__content">
          {isMobile && (
            <img className="introduction__profile-image" src={profile} />
          )}
          <h1 className="introduction__title">Impact phrase UAU</h1>
        </div>
      </div>
    </IterativeBackground>
  );
};
