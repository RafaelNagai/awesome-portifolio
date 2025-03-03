import React from "react";
import { LanguageButton } from "./language-button/language-button";
import brazilFlag from "../../../assets/flags/brazil.jpg";
import canadaFlag from "../../../assets/flags/canada.jpg";
import "./all-language-button.scss";

export const AllLanguageButton: React.FC = () => {
  return (
    <div className="language-buttons">
      <LanguageButton language="en" src={canadaFlag} />
      <LanguageButton language="pt" src={brazilFlag} />
    </div>
  );
};
