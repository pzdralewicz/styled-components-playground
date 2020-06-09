import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.background || "#fff"};
    color: ${(props) => props.theme.color || "#333"};
  }

  h3 {
    margin: 1rem;
  }
`;
