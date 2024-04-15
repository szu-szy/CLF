"use client";

import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormLabel,
} from "./ProductForm.theme";
import { Props, useProductForm } from "./useProductForm";

export const ProductForm = ({ addProduct, toggleForm }: Props) => {
  const { name, price, isShippingRequired, handleChange, handleSubmit } =
    useProductForm({ addProduct, toggleForm });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel htmlFor="name">
        Nazwa
        <StyledFormInput
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          minLength={6}
          maxLength={20}
          required
        />
      </StyledFormLabel>
      <StyledFormLabel htmlFor="price">
        Cena
        <StyledFormInput
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleChange}
          min={0}
          required
          step="0.01"
        />
      </StyledFormLabel>
      <StyledFormLabel htmlFor="shippingInfo" isRowDirection>
        Potrzebna wysyłka
        <StyledFormInput
          id="shippingInfo"
          type="checkbox"
          name="isShippingRequired"
          checked={isShippingRequired}
          onChange={handleChange}
        />
      </StyledFormLabel>
      <StyledFormButton>Create</StyledFormButton>
    </StyledForm>
  );
};
