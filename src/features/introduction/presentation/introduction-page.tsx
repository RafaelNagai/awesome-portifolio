import React from "react";
import "./introduction-page.scss";
import { IterativeBackground } from "../../iterative-background/presentation/iterative-background";
import icon from "../../../assets/rafael-background.png";
import { useTranslation } from "react-i18next";
import { AllLanguageButton } from "../../../core/internationalization/components/all-language-button";

export const IntroductionPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IterativeBackground src={icon}>
      <div className="introduction">
        <AllLanguageButton />
        <div className="introduction__content">
          <h1 className="introduction__title">Rafael Kenji Sales Nagai</h1>
          <div className="introduction__summary">
            {t("introduction.description")}
          </div>
        </div>
      </div>
    </IterativeBackground>
  );
};
