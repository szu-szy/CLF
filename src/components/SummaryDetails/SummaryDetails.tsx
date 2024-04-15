"use client";

import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledParagraph,
  StyledSubHeadline,
} from "./SummaryDetails.theme";
import { useSummaryDetails } from "./useSummaryDetails";

export const SummaryDetails = () => {
  const {
    products,
    address,
    shippingMethod,
    paymentMethod,
    getCurrency,
    getFullyPrice,
  } = useSummaryDetails();

  return (
    <StyledContainer>
      {address && (
        <>
          <StyledSubHeadline>Address</StyledSubHeadline>
          <StyledParagraph>
            Street: {address.street}, City: {address.city}, Country:{" "}
            {address.country}
          </StyledParagraph>
        </>
      )}
      <>
        <StyledSubHeadline>Shipping method</StyledSubHeadline>
        <StyledParagraph>{shippingMethod ?? "SKIP"}</StyledParagraph>
      </>
      <>
        <StyledSubHeadline>Payment method</StyledSubHeadline>
        <StyledParagraph>{paymentMethod ?? "SKIP"}</StyledParagraph>
      </>
      {products.length > 0 && (
        <>
          <StyledSubHeadline>Products</StyledSubHeadline>
          <StyledList>
            {products.map((product) => (
              <StyledListItem key={product.id}>
                {product.name} - x{product.count} ={" "}
                {product.price * product.count} {getCurrency()}
              </StyledListItem>
            ))}
          </StyledList>
          <StyledSubHeadline>SUMA: {getFullyPrice()}</StyledSubHeadline>
        </>
      )}
    </StyledContainer>
  );
};
