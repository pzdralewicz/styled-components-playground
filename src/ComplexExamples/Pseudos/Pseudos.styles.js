import styled from "styled-components";

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    background: antiquewhite;

    :first-child {
      border: 1px solid red;
    }

    p {
      color: navy;

      &.classy-paragraph {
        color: brown;
      }

      &#unique-paragraph {
        background: aliceblue;
      }
    }
  }
`;

export const HoverableBox = styled.div`
  transition: 300ms all;
  height: 100px;
  width: 100px;
  background: aqua;

  :hover {
    background: aquamarine;
  }
`;
