import styled from "styled-components";
import { Box } from "../../common/styles";

export const PasswordInput = styled.input.attrs({
  type: "password",
})``;

export const TestableBox = styled(Box).attrs((props) => ({
  "data-testid": props.testID,
}))`
  background: blanchedalmond;
`;
