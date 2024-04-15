"use client";

import { URLS } from "@/lib/urls";
import { ProductForm } from "../ProductForm/ProductForm";
import { ProductList } from "../ProductList/ProductList";
import {
  StyledButton,
  StyledFooter,
  StyledHeader,
  StyledHeadline,
  StyledLink,
  StyledSummary,
} from "./NewProductList.theme";
import { useNewProductList } from "./useNewProductList";

export const NewProductList = () => {
  const {
    products,
    isFormVisible,
    handleShippingInfo,
    handleCount,
    removeProduct,
    getFullyPrice,
    addProduct,
    toggleForm,
  } = useNewProductList();

  return isFormVisible ? (
    <>
      <StyledHeader>
        <StyledHeadline>NEW PRODUCT</StyledHeadline>
      </StyledHeader>
      <ProductForm addProduct={addProduct} toggleForm={toggleForm} />
    </>
  ) : (
    <>
      <StyledHeader>
        <StyledButton onClick={toggleForm}>NEW PRODUCT</StyledButton>
        <StyledHeadline>CART</StyledHeadline>
        <StyledLink href={URLS.SUMMARY}>Continue</StyledLink>
      </StyledHeader>
      <ProductList
        products={products}
        handleShippingInfo={handleShippingInfo}
        handleCount={handleCount}
        removeProduct={removeProduct}
      />
      <StyledFooter>
        <StyledSummary>{getFullyPrice()}</StyledSummary>
      </StyledFooter>
    </>
  );
};
