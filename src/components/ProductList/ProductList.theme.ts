import styled from "styled-components";

export const ProductsContainer = styled.ul`
  aling-items: start;
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  border: 1px solid rgba(161, 161, 161, 0.5);
  padding: 10px 20px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(161, 161, 161, 0.5);
  }
`;

export const StyledProduct = styled.li`
  display: grid;
  grid-template-areas: "name shippingInfo count price remove";
  grid-template-columns: 1fr 200px 150px 150px 150px;
  grid-template-rows: 70px;
  align-items: center;
  border-bottom: 1px solid rgba(161, 161, 161, 0.5);
`;

export const ProductName = styled.span`
  grid-area: name;
  font-size: 18px;
`;

export const ProductShippingInfoLabel = styled.label`
  grid-area: shippingInfo;
  display: flex;
  cursor: pointer;
`;

export const ProductShippingInfoInput = styled.input`
  width: 20px;
  height: 20px;
  font-size: 14px;
`;

export const ProductPrice = styled.span`
  grid-area: price;
  font-size: 18px;
  text-align: center;
`;

export const ProductCountLabel = styled.label`
  display: flex;
  grid-area: count;
  font-size: 18px;
  cursor: pointer;
`;

export const ProductCountInput = styled.input`
  color: #000;
  font-size: 18px;
  width: 50px;
`;
