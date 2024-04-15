"use client";

import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormLabel,
} from "../ProductForm/ProductForm.theme";
import { COUNTRY, SHIPPING_METHOD } from "@/lib/types";
import { useShippingForm } from "./useShippingForm";

export const ShippingForm = () => {
  const { address, shippingMethod, handleChange, handleSubmit } =
    useShippingForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      {address?.country === COUNTRY.PL && (
        <StyledFormLabel htmlFor="shipping-bike">
          Dostawa rowerem (PL only)
          <StyledFormInput
            id="shipping-bike"
            type="radio"
            name="shipping"
            value={SHIPPING_METHOD.BIKE}
            checked={shippingMethod === SHIPPING_METHOD.BIKE}
            onChange={handleChange}
          />
        </StyledFormLabel>
      )}
      <StyledFormLabel htmlFor="shipping-standard">
        Dostawa standard
        <StyledFormInput
          id="shipping-standard"
          type="radio"
          name="shipping"
          value={SHIPPING_METHOD.STANDARD}
          checked={shippingMethod === SHIPPING_METHOD.STANDARD}
          onChange={handleChange}
        />
      </StyledFormLabel>
      <StyledFormButton>Wybierz</StyledFormButton>
    </StyledForm>
  );
};
