import React from "react";
import "./sass/introduction.scss";
import { IterativeBackground } from "../../iterative-background/presentation/iterative-background";
import icon from "../../../assets/rafael-background.png";

export const IntroductionPage: React.FC = () => {
  return (
    <IterativeBackground src={icon}>
      <div className="introduction">
        <div className="introduction__content">
          <h1 className="introduction__title">Rafael Kenji Sales Nagai</h1>
          <div className="introduction__summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            sapiente fugit? Aspernatur laborum facere optio temporibus, quidem
            quasi laboriosam exercitationem, aut libero laudantium debitis
            distinctio hic suscipit ipsum, labore molestias! Unde, accusantium
            eaque, id non pariatur rerum, sed amet labore repellat cumque natus
            ratione. Numquam amet fugiat modi. Atque praesentium repudiandae
            nulla ducimus autem alias debitis corporis optio laudantium amet.
            Eaque, eum numquam aspernatur nesciunt, nemo aut officia suscipit
            magni fugiat natus molestiae deserunt incidunt, aliquid voluptates
            accusantium soluta minus a delectus provident beatae. Quas culpa
            beatae maiores doloribus soluta! Fugit dolorum velit molestiae
            inventore consequuntur et officiis consectetur officia possimus
            culpa maiores rerum laborum modi, temporibus libero eos. Numquam
            labore debitis dicta explicabo fugiat. Explicabo eum rem quis enim!
          </div>
        </div>
      </div>
    </IterativeBackground>
  );
};
