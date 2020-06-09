import React, { useState } from "react";
import * as Styled from "./Props.styles";
import { HorizontalContainer, VerticalContainer } from "../../common/styles";

const Props = () => {
  const [isButtonVisible, setButtonVisibility] = useState(true);

  const onSquareButtonPressed = () => {
    setButtonVisibility(!isButtonVisible);
  };

  return (
    <VerticalContainer>
      <h3 className="header">Propsy</h3>
      <HorizontalContainer>
        <Styled.SquareButton size={100} onClick={onSquareButtonPressed}>
          Wciśnij mnie!
        </Styled.SquareButton>
        <Styled.ToggledButton isVisible={isButtonVisible}>
          A ja się schowam
        </Styled.ToggledButton>
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default Props;
