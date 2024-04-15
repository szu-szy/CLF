"use client";

import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormLabel,
} from "../ProductForm/ProductForm.theme";
import { COUNTRY, PAYMENT_METHOD } from "@/lib/types";
import { usePaymentForm } from "./usePaymentForm";

export const PaymentForm = () => {
  const { address, paymentMethod, handleChange, handleSubmit } =
    usePaymentForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      {address?.country === COUNTRY.PL && (
        <StyledFormLabel htmlFor="payment-card">
          Płatność kartą (PL only)
          <StyledFormInput
            id="payment-card"
            type="radio"
            name="payment"
            value={PAYMENT_METHOD.CARD}
            checked={paymentMethod === PAYMENT_METHOD.CARD}
            onChange={handleChange}
          />
        </StyledFormLabel>
      )}
      {address?.country === COUNTRY.US && (
        <StyledFormLabel htmlFor="payment-cash">
          Płatność gotówką (USA only)
          <StyledFormInput
            id="payment-cash"
            type="radio"
            name="payment"
            value={PAYMENT_METHOD.CASH}
            checked={paymentMethod === PAYMENT_METHOD.CASH}
            onChange={handleChange}
          />
        </StyledFormLabel>
      )}
      <StyledFormLabel htmlFor="payment-crypto">
        Płatność krypto (BTC, ETH, DOGE)
        <StyledFormInput
          id="payment-crypto"
          type="radio"
          name="payment"
          value={PAYMENT_METHOD.CRYPTO}
          checked={paymentMethod === PAYMENT_METHOD.CRYPTO}
          onChange={handleChange}
        />
      </StyledFormLabel>
      <StyledFormButton>Wybierz</StyledFormButton>
    </StyledForm>
  );
};
