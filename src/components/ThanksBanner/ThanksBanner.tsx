"use client";

import { URLS } from "@/lib/urls";
import {
  StyledBanner,
  StyledButton,
  StyledHeadline,
} from "./ThanksBanner.theme";
import { CartMachineContext } from "@/lib/xstate";
import { redirect } from "next/navigation";

export const ThanksBanner = () => {
  const cartRef = CartMachineContext.useActorRef();

  return (
    <StyledBanner>
      <StyledHeadline>Thanks for order!</StyledHeadline>
      <StyledButton
        onClick={() => {
          cartRef.send({ type: "RESET" });
          cartRef.send({ type: "RESET_CART" });
          redirect(URLS.CART);
        }}
      >
        One more time
      </StyledButton>
    </StyledBanner>
  );
};
