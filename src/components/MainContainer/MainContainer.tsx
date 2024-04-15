"use client";

import { FC, PropsWithChildren } from "react";
import { StyledContainer } from "./MainContainer.theme";
import { CartMachineContext } from "@/lib/xstate";

export const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CartMachineContext.Provider>
      <StyledContainer>{children}</StyledContainer>
    </CartMachineContext.Provider>
  );
};
