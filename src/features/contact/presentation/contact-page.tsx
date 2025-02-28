import { useEffect, useRef, useState } from "react";
import "./contact-page.scss";
import { ContactButton } from "./components/contact-button";

export const ContactPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const buttonElement =
      document.querySelector<HTMLDivElement>(".contact-button");
    const onScrollHandler = () => {
      if (ref.current && buttonElement) {
        //expand
        const relativeTopPage = ref.current.offsetTop;
        const { height } = ref.current.getBoundingClientRect();
        const _isExpanded = window.scrollY + height > relativeTopPage;
        setIsExpanded(_isExpanded);

        //position
        const heightScreen = window.innerHeight;
        const heightButton = buttonElement.getBoundingClientRect().height;
        const paddingBottom = 16;
        const topPosition =
          window.scrollY + heightScreen - paddingBottom - heightButton;

        buttonElement.style.top = `${topPosition - relativeTopPage}px`;
      }
    };
    document.addEventListener("scroll", onScrollHandler);

    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div ref={ref} className="contact">
      <ContactButton isExpanded={isExpanded} />
    </div>
  );
};
