import styled from "styled-components";

export const StyledBanner = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledHeadline = styled.h1`
  font-size: 32px;
  line-height: 1.2;
  color: gold;
`;

export const StyledButton = styled.button`
  color: #fff;
  font-size: 16px;
  border: 1px solid #fff;
  padding: 10px 20px;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
