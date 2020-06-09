import styled from "styled-components";

export const SquareButton = styled.button`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const ToggledButton = styled.button`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
