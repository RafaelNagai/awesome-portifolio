import React, { useState } from "react";
import "./contact-button.scss";
import { useTranslation } from "react-i18next";
import pubdevIcon from "../../../../../assets/logos/pubdev-logo.png";
import githubIcon from "../../../../../assets/icons/github-icon.png";
import linkedinIcon from "../../../../../assets/icons/linkedin-icon.png";
import { SocialMedia } from "../../../domain/social-media";
import {
  directionFade as DirectionFade,
  FadeInOut,
} from "../../../../../core/components/fade/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type ContactButtonProps = {
  isExpanded: boolean;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ isExpanded }) => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onTap = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className={`contact-button button ${
        isExpanded ? "contact-button--expanded" : "contact-button--contracted"
      }`}
      onClick={onTap}
      data-hover={isExpanded ? false : true}
    >
      {isOpened ? (
        <FontAwesomeIcon
          className={`${isExpanded && "contact-button--hide"}`}
          icon={faClose}
        />
      ) : (
        <p className={`${isExpanded && "contact-button--hide"}`}>
          {t("contact")}
        </p>
      )}

      <FadeInOut
        isScrollableEvent={false}
        delay={0}
        direction={DirectionFade.right}
        className={`contact-button__container ${
          (!isOpened || isExpanded) && "contact-button--hide"
        }`}
      >
        <a
          className="contact-button__item"
          target="_blank"
          href={SocialMedia.linkedin}
        >
          <img className="contact-button__icon" src={linkedinIcon} />
          <p className="contact-button__title-icon">LinkedIn</p>
        </a>
        <a
          className="contact-button__item"
          target="_blank"
          href={SocialMedia.github}
        >
          <img className="contact-button__icon" src={githubIcon} />
          <p className="contact-button__title-icon">Github</p>
        </a>
        <a
          className="contact-button__item"
          target="_blank"
          href={SocialMedia.youtube}
        >
          <img className="contact-button__icon" src={pubdevIcon} />
          <p className="contact-button__title-icon">Youtube</p>
        </a>
      </FadeInOut>
    </div>
  );
};
