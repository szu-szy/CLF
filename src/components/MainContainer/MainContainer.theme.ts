import styled from "styled-components";

export const StyledContainer = styled.div`
  background-image: url("../static/images/background.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100dvh;
  display: grid;
  grid-template-areas:
    "header header header header header"
    "leftside content content content rightside"
    "leftside content content content rightside"
    "leftside content content content rightside"
    "footer footer footer footer footer";
  grid-template-rows: 1fr repeat(3, 2fr) 1fr;
  grid-template-columns: 1fr repeat(3, 2fr) 1fr;
`;
