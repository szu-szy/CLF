import { CartMachineContext } from "@/lib/xstate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CART_STATE } from "../StepperContent/StepperContent";
import { URL_API } from "@/lib/urls";

type Data = {
  isFirstStep: boolean;
  isLastStep: boolean;
  isSummaryStep: boolean;
  isAddressingOrShipping: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  handleSkip: () => void;
  handleComplete: () => void;
  getStateHeader: () =>
    | "COMPLETED"
    | "Address"
    | "Shipping"
    | "Payment"
    | "Summary"
    | undefined;
  isNextButtonDisabled: () => boolean | undefined;
};

export const useStepperNav = (): Data => {
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isSummaryStep, setIsSummaryStep] = useState(false);

  const { value: currState, context } = CartMachineContext.useSelector(
    ({ value, context }) => ({ value, context })
  );

  const { products, address, shippingMethod, paymentMethod } = context;

  const cartRef = CartMachineContext.useActorRef();

  const isAddressingOrShipping = [
    CART_STATE.ADDRESSED,
    CART_STATE.SHIPPING_SELECTED,
    CART_STATE.SHIPPING_SKIPPED,
  ].includes(currState as CART_STATE);

  const handleNext = () => {
    switch (currState) {
      case CART_STATE.CART:
        cartRef.send({ type: "ADDRESS" });
        break;
      case CART_STATE.ADDRESSED:
        cartRef.send({ type: "SELECT_SHIPPING" });
        break;
      case CART_STATE.SHIPPING_SELECTED:
        cartRef.send({ type: "SELECT_PAYMENT" });
        break;
      case CART_STATE.SHIPPING_SKIPPED:
        cartRef.send({ type: "SELECT_PAYMENT" });
        break;
      case CART_STATE.PAYMENT_SELECTED:
        cartRef.send({ type: "COMPLETE" });
        break;
      case CART_STATE.PAYMENT_SKIPPED:
        cartRef.send({ type: "COMPLETE" });
        break;
    }
  };

  const handlePrev = () => {
    switch (currState) {
      case CART_STATE.SHIPPING_SELECTED:
        cartRef.send({ type: "ADDRESS" });
        break;
      case CART_STATE.SHIPPING_SKIPPED:
        cartRef.send({ type: "ADDRESS" });
        break;
      case CART_STATE.ADDRESSED:
        cartRef.send({ type: "CART" });
        break;
    }
  };

  const handleSkip = () => {
    switch (currState) {
      case CART_STATE.ADDRESSED:
        cartRef.send({ type: "SKIP_SHIPPING" });
        break;
      case CART_STATE.SHIPPING_SKIPPED:
        cartRef.send({ type: "SKIP_PAYMENT" });
        break;
      case CART_STATE.SHIPPING_SELECTED:
        cartRef.send({ type: "SKIP_PAYMENT" });
    }
  };

  const handleComplete = async () => {
    try {
      const res = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products,
          address,
          shippingMethod,
          paymentMethod,
        }),
      });
      if (!res.ok) throw new Error("Ops! Something wrong happened.");

      const data = await res.json();

      if (data) {
        toast.success("Order placed successfully!");
        cartRef.send({ type: "COMPLETE" });
      }
    } catch (error) {
      toast.error("Ops! Something wrong happened.");
      console.log(error);
    }
  };

  const getStateHeader = () => {
    switch (currState) {
      case CART_STATE.CART:
        return "Address";
      case CART_STATE.ADDRESSED:
        return "Shipping";
      case CART_STATE.SHIPPING_SELECTED:
        return "Payment";
      case CART_STATE.SHIPPING_SKIPPED:
        return "Payment";
      case CART_STATE.PAYMENT_SELECTED:
        return "Summary";
      case CART_STATE.PAYMENT_SKIPPED:
        return "Summary";
      case CART_STATE.COMPLETED:
        return "COMPLETED";
    }
  };

  const isNextButtonDisabled = () => {
    switch (currState) {
      case CART_STATE.CART:
        return !address;
      case CART_STATE.ADDRESSED:
        return !shippingMethod;
      case CART_STATE.SHIPPING_SELECTED:
        return !paymentMethod;
      case CART_STATE.SHIPPING_SKIPPED:
        return !paymentMethod;
      case CART_STATE.COMPLETED:
        return false;
    }
  };

  useEffect(() => {
    setIsFirstStep(currState === CART_STATE.CART);
    setIsLastStep(
      [CART_STATE.PAYMENT_SKIPPED, CART_STATE.PAYMENT_SELECTED].includes(
        currState as CART_STATE
      )
    );
    setIsSummaryStep(currState === CART_STATE.COMPLETED);
  }, [currState]);

  return {
    isFirstStep,
    isLastStep,
    isSummaryStep,
    isAddressingOrShipping,
    handleNext,
    handlePrev,
    handleSkip,
    handleComplete,
    getStateHeader,
    isNextButtonDisabled,
  };
};
