import React, { useState } from "react";
import "./contact-button.scss";
import { useTranslation } from "react-i18next";
import pubdevIcon from "../../../../../assets/logos/pubdev-logo.webp";
import githubIcon from "../../../../../assets/icons/github-icon.webp";
import linkedinIcon from "../../../../../assets/icons/linkedin-icon.webp";
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
    <button
      className={`contact-button button ${
        isExpanded ? "contact-button--expanded" : "contact-button--contracted"
      }`}
      onClick={onTap}
      data-hover={isExpanded ? false : true}
      aria-label="Contact"
    >
      {isOpened ? (
        <FontAwesomeIcon
          className={`${isExpanded && "contact-button--hide"}`}
          icon={faClose}
        />
      ) : (
        <p className={`${isExpanded && "contact-button--hide"}`}>
          {t("contact.contact")}
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
          <img
            className="contact-button__icon"
            src={linkedinIcon}
            alt="Rafael's LinkedIn"
          />
          <p className="contact-button__title-icon">LinkedIn</p>
        </a>
        <a
          className="contact-button__item"
          target="_blank"
          href={SocialMedia.github}
        >
          <img
            className="contact-button__icon"
            src={githubIcon}
            alt="Rafael's GitHub"
          />
          <p className="contact-button__title-icon">Github</p>
        </a>
        <a
          className="contact-button__item"
          target="_blank"
          href={SocialMedia.youtube}
        >
          <img
            className="contact-button__icon"
            src={pubdevIcon}
            alt="Pub Dev Youtube Channel"
          />
          <p className="contact-button__title-icon">Youtube</p>
        </a>
      </FadeInOut>
    </button>
  );
};
