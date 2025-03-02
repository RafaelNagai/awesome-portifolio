import React from "react";
import "./contact-button.scss";
import { useTranslation } from "react-i18next";

type ContactButtonProps = {
  isExpanded: boolean;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ isExpanded }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`contact-button ${isExpanded && "contact-button--expanded"}`}
    >
      <p className={`${isExpanded && "contact-button--hide"}`}>
        {t("contact")}
      </p>
    </div>
  );
};
