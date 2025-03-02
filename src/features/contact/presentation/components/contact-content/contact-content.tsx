import pubdevIcon from "../../../../../assets/logos/pubdev-logo.png";
import githubIcon from "../../../../../assets/icons/github-icon.png";
import linkedinIcon from "../../../../../assets/icons/linkedin-icon.png";

import "./contact-content.scss";
import { SocialMedia } from "../../../domain/social-media";

export const ContactContent: React.FC = () => {
  return (
    <div className="contact-content">
      <div className="contact-content__container">
        <h2 className="contact-content__title">Rafael Kenji Sales Nagai</h2>
        <h4 className="contact-content__subtitle">• Software Engineer •</h4>
        <div className="contact-content__social-medias">
          <a
            className="contact-content__icon"
            target="_blank"
            href={SocialMedia.github}
          >
            <img className="contact-content__icon" src={githubIcon} />
          </a>
          <a
            className="contact-content__icon"
            target="_blank"
            href={SocialMedia.linkedin}
          >
            <img className="contact-content__icon" src={linkedinIcon} />
          </a>
          <a
            className="contact-content__icon"
            target="_blank"
            href={SocialMedia.youtube}
          >
            <img className="contact-content__icon" src={pubdevIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};
