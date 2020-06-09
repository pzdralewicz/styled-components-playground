import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalContainer = styled(Container)`
  flex-direction: column;
`;

export const HorizontalContainer = styled(Container)`
  flex-direction: row;
`;
