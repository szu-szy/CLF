"use client";

import { StyledOption, StyledSelect } from "./AddressForm.theme";
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormButton,
} from "../ProductForm/ProductForm.theme";
import { useAddressForm } from "./useAddressForm";

export const AddressForm = () => {
  const { street, city, country, handleSubmit, handleChange } =
    useAddressForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel htmlFor="street">
        Street:
        <StyledFormInput
          id="street"
          name="street"
          value={street}
          onChange={handleChange}
          minLength={6}
          required
        />
      </StyledFormLabel>
      <StyledFormLabel htmlFor="city">
        City:
        <StyledFormInput
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
          minLength={6}
          required
        />
      </StyledFormLabel>
      <StyledFormLabel htmlFor="country">
        Country
        <StyledSelect
          id="country"
          value={country}
          name="country"
          required
          onChange={handleChange}
        >
          <StyledOption value="" disabled>
            Select country
          </StyledOption>
          <StyledOption value="PL">Poland</StyledOption>
          <StyledOption value="US">USA</StyledOption>
        </StyledSelect>
      </StyledFormLabel>
      <StyledFormButton>Wybierz</StyledFormButton>
    </StyledForm>
  );
};
