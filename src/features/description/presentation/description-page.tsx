import { useTranslation } from "react-i18next";
import "./description-page.scss";
import { ProfileDescription } from "./components/profile-description";
import { directionFade, FadeInOut } from "../../../core/components/fade/fade";

export const DescriptionPage = () => {
  const { t } = useTranslation();
  return (
    <section className="description">
      <div className="description__container">
        <FadeInOut
          direction={directionFade.left}
          className="description__column"
        >
          <ProfileDescription />
        </FadeInOut>
        <FadeInOut
          direction={directionFade.right}
          className="description__column"
        >
          <div className="description__content">
            <h1 className="description__title">RAFAEL NAGAI</h1>
            <p className="description__summary">
              {t("introduction.description")}
            </p>
          </div>
        </FadeInOut>
      </div>
    </section>
  );
};
