import React, { useState } from "react";
import "./contact-button.scss";
import { useTranslation } from "react-i18next";
import pubdevIcon from "../../../../../assets/logos/pubdev-logo.png";
import githubIcon from "../../../../../assets/icons/github-icon.png";
import linkedinIcon from "../../../../../assets/icons/linkedin-icon.png";
import { SocialMedia } from "../../../domain/social-media";
import { FadeInOut } from "../../../../../core/components/fade/fade";

type ContactButtonProps = {
  isExpanded: boolean;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ isExpanded }) => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onTap = () => {
    setIsOpened(true);
  };

  return (
    <div
      className={`contact-button ${
        isExpanded ? "contact-button--expanded" : "contact-button--contracted"
      }`}
      onClick={onTap}
    >
      <p className={`${isExpanded && "contact-button--hide"}`}>
        {t("contact")}
      </p>

      <div
        className={`contact-button__container ${
          (!isOpened || isExpanded) && "contact-button--hide"
        }`}
      >
        <FadeInOut isScrollableEvent={false} delay={0}>
          <a className="contact-button__item" href={SocialMedia.linkedin}>
            <img className="contact-button__icon" src={linkedinIcon} />
            <p className="contact-button__title-icon">LinkedIn</p>
          </a>
        </FadeInOut>
        <FadeInOut isScrollableEvent={false} delay={500}>
          <a className="contact-button__item" href={SocialMedia.github}>
            <img className="contact-button__icon" src={githubIcon} />
            <p className="contact-button__title-icon">Github</p>
          </a>
        </FadeInOut>
        <FadeInOut isScrollableEvent={false} delay={1000}>
          <a className="contact-button__item" href={SocialMedia.youtube}>
            <img className="contact-button__icon" src={pubdevIcon} />
            <p className="contact-button__title-icon">Youtube</p>
          </a>
        </FadeInOut>
      </div>
    </div>
  );
};
