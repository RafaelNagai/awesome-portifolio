import React from "react";
import { LanguageButton } from "./language-button/language-button";
import brazilFlag from "../../../assets/flags/brazil.webp";
import canadaFlag from "../../../assets/flags/canada.webp";
import "./all-language-button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AllLanguageButton: React.FC = () => {
  return (
    <div className="grab_container">
      <div className="language-buttons">
        <div className="language-buttons__buttons">
          <LanguageButton language="en" src={canadaFlag} />
          <LanguageButton language="pt" src={brazilFlag} />
        </div>
        <FontAwesomeIcon
          className="language-buttons__grab"
          icon={faChevronDown}
          color="white"
        />
      </div>
    </div>
  );
};
