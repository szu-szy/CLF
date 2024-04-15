import styled from "styled-components";

export enum GRID_AREA {
  BACK = "back",
  HEADER = "header",
  ADD = "add",
  NEXT = "next",
  SKIP = "skip",
}

type ButtonProps = {
  area: GRID_AREA;
};

export const StyledContainer = styled.div`
  height: 50px;
  grid-area: header;
  display: grid;
  grid-template-areas: "back header skip next";
  grid-template-columns: 100px 1fr repeat(2, 100px);
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 10px 20px;
  grid-area: ${({ area }) => area};
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(161, 161, 161, 0.5);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const StyledHeader = styled.h1`
  padding-left: 100px;
  grid-area: header;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
`;
