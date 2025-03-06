import { useEffect, useRef, useState } from "react";
import "./contact-page.scss";
import { ContactButton } from "./components/contact-button/contact-button";
import { ContactContent } from "./components/contact-content/contact-content";
import { directionFade, FadeInOut } from "../../../core/components/fade/fade";

export const ContactPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const onScrollHandler = () => {
      if (ref.current) {
        const heightScreen = window.innerHeight;
        const { top } = ref.current.getBoundingClientRect();
        const _isExpanded = top < heightScreen;
        setIsExpanded(_isExpanded);
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
      <FadeInOut direction={directionFade.down}>
        <ContactContent />
      </FadeInOut>
    </div>
  );
};
