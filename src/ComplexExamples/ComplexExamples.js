import React, { useState } from "react";

import Props from "./Props/Props";
import Pseudos from "./Pseudos/Pseudos";
import Attributes from "./Attributes/Attributes";
import GlobalStyle from "./Globals/Globals";
import Themes, { LIGHT_THEME } from "./Themes/Themes";

import { VerticalContainer } from "../common/styles";
import { ThemeProvider } from "styled-components";

const ComplexExamples = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <VerticalContainer>
      <Props />
      <Pseudos />
      <Attributes />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
      <Themes setTheme={setTheme} />
    </VerticalContainer>
  );
};

export default ComplexExamples;
