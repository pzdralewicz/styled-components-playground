import styled from "styled-components";
import { Box } from "../../common/styles";

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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

export const HoverableBox = styled(Box)`
  transition: 300ms all;
  background: aqua;

  :hover {
    background: aquamarine;
  }
`;
