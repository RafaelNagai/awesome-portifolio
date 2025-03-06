import pubdevIcon from "../../../../../assets/logos/pubdev-logo.png";
import githubIcon from "../../../../../assets/icons/github-icon.png";
import linkedinIcon from "../../../../../assets/icons/linkedin-icon.png";

import "./contact-content.scss";
import { SocialMedia } from "../../../domain/social-media";
import { useTranslation } from "react-i18next";
import {
  directionFade,
  FadeInOut,
} from "../../../../../core/components/fade/fade";

export const ContactContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-content">
      <FadeInOut direction={directionFade.down}>
        <div className="contact-content__container">
          <h2 className="contact-content__title">Rafael Kenji Sales Nagai</h2>
          <h4 className="contact-content__subtitle">• Software Engineer •</h4>
          <div className="contact-content__social-medias">
            <a
              className="contact-content__icon"
              target="_blank"
              href={SocialMedia.github}
            >
              <img
                className="contact-content__icon"
                src={githubIcon}
                data-hover={true}
              />
            </a>
            <a
              className="contact-content__icon"
              target="_blank"
              href={SocialMedia.linkedin}
            >
              <img
                className="contact-content__icon"
                src={linkedinIcon}
                data-hover={true}
              />
            </a>
            <a
              className="contact-content__icon"
              target="_blank"
              href={SocialMedia.youtube}
            >
              <img
                className="contact-content__icon"
                src={pubdevIcon}
                data-hover={true}
              />
            </a>
          </div>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="github-access">
          <p>
            {t("code.1")}
            <a
              href="https://github.com/RafaelNagai/awesome-portifolio"
              target="_blank"
              className="github-access__link"
            >
              {t("code.2")}
            </a>
            {t("code.3")}
          </p>
        </div>
      </FadeInOut>
    </div>
  );
};
