"use client";

import { URLS } from "@/lib/urls";
import { CartMachineContext } from "@/lib/xstate";
import { redirect } from "next/navigation";
import { ShippingForm } from "../ShippingForm/ShippingForm";
import { AddressForm } from "../AddressForm/AddressForm";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { SummaryDetails } from "../SummaryDetails/SummaryDetails";
import { ThanksBanner } from "../ThanksBanner/ThanksBanner";

export enum CART_STATE {
  CART = "CART",
  ADDRESSED = "ADDRESSED",
  SHIPPING_SELECTED = "SHIPPING_SELECTED",
  SHIPPING_SKIPPED = "SHIPPING_SKIPPED",
  PAYMENT_SELECTED = "PAYMENT_SELECTED",
  PAYMENT_SKIPPED = "PAYMENT_SKIPPED",
  COMPLETED = "COMPLETED",
}

export const StepperContent = () => {
  const { value: currState, context } = CartMachineContext.useSelector(
    ({ value, context }) => ({ value, context })
  );

  const { products } = context;

  if (!(products.length > 0)) redirect(URLS.CART);

  const renderStep = () => {
    switch (currState) {
      case CART_STATE.CART:
        return <AddressForm />;
      case CART_STATE.ADDRESSED:
        return <ShippingForm />;
      case CART_STATE.SHIPPING_SELECTED:
        return <PaymentForm />;
      case CART_STATE.SHIPPING_SKIPPED:
        return <PaymentForm />;
      case CART_STATE.PAYMENT_SELECTED:
        return <SummaryDetails />;
      case CART_STATE.PAYMENT_SKIPPED:
        return <SummaryDetails />;
      case CART_STATE.COMPLETED:
        return <ThanksBanner />;
    }
  };

  return <>{renderStep()}</>;
};
