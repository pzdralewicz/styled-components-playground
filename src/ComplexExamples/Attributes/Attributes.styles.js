import styled from "styled-components";

export const Box = styled.div`
  height: 100px;
  width: 100px;
  background: aqua;
`;

export const PasswordInput = styled.input.attrs({
  type: "password",
})``;

export const TestableBox = styled(Box).attrs((props) => ({
  "data-testid": props.testID,
}))``;
