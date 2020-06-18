import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  border: 2px;
  border-radius: 3px;
`;

export const DarkThemeButton = styled(Button)`
  border-color: #fff;
  background: #333;
  color: #fff;
`;

export const LightThemeButton = styled(Button)`
  border-color: #333;
  background: #fff;
  color: #333;
`;
