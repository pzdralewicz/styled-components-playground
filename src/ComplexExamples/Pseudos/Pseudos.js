import React from "react";
import * as Styled from "./Pseudos.styles";
import { HorizontalContainer, VerticalContainer } from "../../common/styles";

const Pseudos = () => {
  return (
    <VerticalContainer>
      <h3 className="header">Pseudoelementy, pseudoklasy, ...</h3>
      <HorizontalContainer>
        <Styled.Paragraphs>
          <div>
            <p className="classy-paragraph">Akapit z klasą</p>
            <p id="unique-paragraph">Akapit z id</p>
          </div>
        </Styled.Paragraphs>
        <Styled.HoverableBox>
          <p>Najedź na mnie</p>
        </Styled.HoverableBox>
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default Pseudos;
