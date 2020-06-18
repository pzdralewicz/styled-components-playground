import React from "react";

import * as Styled from "./BasicExample.styles";
import { HorizontalContainer } from "../common/styles";

const BasicExample = () => {
  return (
    <HorizontalContainer>
      <Styled.Button>Wciśnij mnie!</Styled.Button>
      <Styled.BlueButton>Niebieski!</Styled.BlueButton>
      <Styled.RedButton>Czerwony!</Styled.RedButton>
    </HorizontalContainer>
  );
};

export default BasicExample;
