import React from "react";
import * as Styled from "./Themes.styles";
import { HorizontalContainer, VerticalContainer } from "../../common/styles";

export const LIGHT_THEME = {
  background: "#fff",
  color: "#333",
};

export const DARK_THEME = {
  background: "#333",
  color: "#fff",
};

const Themes = ({ setTheme }) => {
  return (
    <VerticalContainer>
      <h3 className="header">Motywy</h3>
      <HorizontalContainer>
        <Styled.DarkThemeButton onClick={() => setTheme(DARK_THEME)}>
          Ciemny motyw
        </Styled.DarkThemeButton>
        <Styled.LightThemeButton onClick={() => setTheme(LIGHT_THEME)}>
          Jasny motyw
        </Styled.LightThemeButton>
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default Themes;
