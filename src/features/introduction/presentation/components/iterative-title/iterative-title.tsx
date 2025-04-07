import React, { useEffect, useState } from "react";
import "./iterative-title.scss";
import { useTranslation } from "react-i18next";

export const IterativeTitle: React.FC = () => {
  const { t } = useTranslation();
  const firstTitle = t("introduction.coding_with");
  const secondTitle = t("introduction.teaching_with");
  const [secondLine, setSecondLine] = useState(false);

  return (
    <div className="phrase" data-invert={true}>
      <PhraseCursor
        phrase={firstTitle}
        highlightedText={t("introduction.passion")}
        textColor="black"
        highlightedColor="white"
        onFinish={() => setSecondLine(true)}
      />
      {secondLine && (
        <PhraseCursor
          phrase={secondTitle}
          highlightedText={t("introduction.love")}
          textColor="white"
          highlightedColor="black"
        />
      )}
    </div>
  );
};

const PhraseCursor: React.FC<{
  phrase: string;
  highlightedText: string;
  textColor: string;
  highlightedColor: string;
  onFinish?: () => void;
}> = ({ phrase, highlightedText, textColor, highlightedColor, onFinish }) => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    let wordCounter = 0;
    const generatePhrase = () => {
      if (wordCounter <= phrase.length) {
        setCurrentPhrase(phrase.substring(0, wordCounter));
        wordCounter++;
      } else {
        setTimeout(() => {
          setAnimate(true);
        }, 500);
        clearInterval(interval);
        setTimeout(() => {
          onFinish?.call(this);
        }, 4000);
      }
    };

    let interval: number;
    setTimeout(() => {
      interval = setInterval(generatePhrase, 300);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="phrase" style={{ color: textColor }}>
      <span className="phrase__text">{currentPhrase}</span>
      <div className="phrase__cursor-container">
        <div
          className={`phrase__cursor ${animate && "phrase__cursor--animate"}`}
          style={{ backgroundColor: highlightedColor }}
        />
        <p
          className={`phrase__highlighted-text ${
            animate && "phrase__highlighted-text--animate"
          }`}
          style={{ color: highlightedColor }}
        >
          {highlightedText}
        </p>
      </div>
    </div>
  );
};
