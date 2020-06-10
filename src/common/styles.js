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

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem;
  height: 100px;
  width: 100px;
`;
