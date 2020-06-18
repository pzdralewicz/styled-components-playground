import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 3px;
  font-weight: bold;
  padding: 1rem;
  margin: 1rem;

  :hover {
    filter: invert(25%);
  }
`;

export const BlueButton = styled(Button)`
  color: #fff;
  background: #00f;
`;

export const RedButton = styled(Button)`
  background: #f00;
`;

export const YellowButton = styled(Button)`
  background: #fa0;
`;
