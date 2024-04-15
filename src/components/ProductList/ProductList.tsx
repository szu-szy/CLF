"use client";

import { CartProduct } from "../NewProductList/useNewProductList";
import {
  ProductCountInput,
  ProductCountLabel,
  ProductName,
  ProductPrice,
  ProductShippingInfoInput,
  ProductShippingInfoLabel,
  ProductsContainer,
  StyledButton,
  StyledProduct,
} from "./ProductList.theme";

type Props = {
  products: CartProduct[];
  handleShippingInfo: (id: string) => void;
  handleCount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeProduct: (id: string) => void;
};

export const ProductList = ({
  products,
  handleShippingInfo,
  handleCount,
  removeProduct,
}: Props) => {
  return (
    <ProductsContainer>
      {products.map(({ id, name, price, isShippingRequired, count }) => (
        <StyledProduct key={id}>
          <ProductName>{name}</ProductName>
          <ProductShippingInfoLabel htmlFor={`shippingInfo-${id}`}>
            Potrzebna wysyłka -
            <ProductShippingInfoInput
              type="checkbox"
              id={`shippingInfo-${id}`}
              checked={isShippingRequired}
              onChange={() => handleShippingInfo(id)}
            />
          </ProductShippingInfoLabel>
          <ProductCountLabel htmlFor={`count-${id}`}>
            Ilość -{" "}
            <ProductCountInput
              type="number"
              id={`count-${id}`}
              name={id}
              value={count}
              onChange={handleCount}
            />
          </ProductCountLabel>
          <ProductPrice>{price} PLN/ SZT</ProductPrice>
          <StyledButton onClick={() => removeProduct(id)}>REMOVE</StyledButton>
        </StyledProduct>
      ))}
    </ProductsContainer>
  );
};
