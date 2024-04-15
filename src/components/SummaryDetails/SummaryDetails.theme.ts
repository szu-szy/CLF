import styled from "styled-components";

export const StyledContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const StyledSubHeadline = styled.h2`
  font-size: 20px;
  color: gold;
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
`;

export const StyledList = styled.ul`
  padding: 20px 50px;
`;

export const StyledListItem = styled.li`
  border-bottom: 1px solid #ccc;
  font-size: 16px;
`;
