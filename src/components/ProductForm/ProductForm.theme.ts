import styled from "styled-components";

type StyledFormLabelProps = {
  isRowDirection?: boolean;
};

export const StyledForm = styled.form`
  grid-area: content;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  gap: 10px;
  justify-content: center;
`;

export const StyledFormLabel = styled.label<StyledFormLabelProps>`
  display: flex;
  gap: 10px;
  flex-direction: ${({ isRowDirection }) =>
    isRowDirection ? "row" : "column"};
  justify-content: space-between;
  font-size: 16px;
`;

export const StyledFormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  color: #000;
`;

export const StyledFormButton = styled.button`
  font-size: 16px;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 10px 20px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(161, 161, 161, 0.5);
  }
`;
