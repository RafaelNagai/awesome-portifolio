import { useEffect, useRef, useState } from "react";
import "./contact-page.scss";
import { ContactButton } from "./components/contact-button/contact-button";
import { ContactContent } from "./components/contact-content/contact-content";
import { FadeInOut } from "../../../core/components/fade/fade";

export const ContactPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const buttonElement =
      document.querySelector<HTMLDivElement>(".contact-button");
    const onScrollHandler = () => {
      if (ref.current && buttonElement) {
        //expand
        const heightScreen = window.innerHeight;
        const { top } = ref.current.getBoundingClientRect();
        const _isExpanded = top < heightScreen;
        setIsExpanded(_isExpanded);

        //position
        const relativeTopPage = ref.current.offsetTop;
        const heightButton = buttonElement.getBoundingClientRect().height;
        const paddingBottom = 16;
        const topPosition =
          window.scrollY + heightScreen - paddingBottom - heightButton;
        let topElement = topPosition - relativeTopPage;
        if (topElement <= 0 && !_isExpanded) {
          buttonElement.style.top = `${topElement}px`;
        }
      }
    };
    document.addEventListener("scroll", onScrollHandler);
    onScrollHandler();

    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div ref={ref} className="contact">
      <ContactButton isExpanded={isExpanded} />
      <FadeInOut directionUp={false}>
        <ContactContent />
      </FadeInOut>
    </div>
  );
};
