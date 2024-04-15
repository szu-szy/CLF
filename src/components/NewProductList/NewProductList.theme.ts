import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas: "add headline summary";
  grid-template-columns: 200px 1fr 120px;
  grid-template-rows: 1fr;
  text-align: center;
  align-items: center;
`;

export const StyledHeadline = styled.h1`
  margin: 0;
  grid-area: headline;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StyledButton = styled.button`
  grid-area: add;
  font-size: 16px;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 10px 20px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(161, 161, 161, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  grid-area: summary;
  font-size: 14px;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 10px 20px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(161, 161, 161, 0.5);
  }
`;

export const StyledFooter = styled.div`
  display: grid;
  grid-area: footer;
  grid-template-areas: "steps summary";
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr;
`;

export const StyledSummary = styled.span`
  grid-area: summary;
  font-size: 14px;
  text-align: end;
`;
