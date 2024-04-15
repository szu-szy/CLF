"use client";

import { FC, PropsWithChildren } from "react";
import { StyledContainer } from "./PageContainer.theme";

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
