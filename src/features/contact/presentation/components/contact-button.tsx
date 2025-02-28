import React from "react";
import "./contact-button.scss";

type ContactButtonProps = {
  isExpanded: boolean;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ isExpanded }) => {
  return (
    <div
      className={`contact-button ${isExpanded && "contact-button--expanded"}`}
    >
      <p>Buttton</p>
    </div>
  );
};
