import styled from "styled-components";

export const StyledContainer = styled.main`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(161, 161, 161, 0.5);
  box-shadow: 0px 0px 50px 15px rgba(161, 161, 161, 0.5);
  display: grid;
  grid-area: content;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 15px;
`;
