import React from "react";
import * as Styled from "./Attributes.styles";
import { HorizontalContainer, VerticalContainer } from "../../common/styles";

const Attributes = () => {
  return (
    <VerticalContainer>
      <h3 className="header">Atrybuty</h3>
      <HorizontalContainer>
        <Styled.PasswordInput />
        <Styled.TestableBox testID={"test-box"}>
          <span>Mam testID</span>
        </Styled.TestableBox>
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default Attributes;
