import React from "react";
import "./language-button.scss";
import { useTranslation } from "react-i18next";

type LanguageButtonProps = {
  language: string;
  src: string;
};

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  src,
}) => {
  const { i18n } = useTranslation();

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const isNotActivated = i18n.language !== language;

  return (
    <button
      className={`language-button ${
        isNotActivated && "language-button--not-selected"
      }`}
      onClick={onChangeLanguage}
      style={{
        backgroundImage: `url(${src})`,
      }}
      aria-label={`language - ${language}`}
    ></button>
  );
};
