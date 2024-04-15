"use client";

import { URLS } from "@/lib/urls";
import {
  StyledContainer,
  StyledHeadline,
  StyledLink,
  StyledParagraph,
  StyledSubheadline,
} from "./theme";

export default function Home() {
  return (
    <StyledContainer>
      <StyledSubheadline>Coraz</StyledSubheadline>
      <StyledHeadline>
        <strong>Lepsza</strong>
        {" <"}
        <strong>Firma</strong>
        {" />"}
      </StyledHeadline>
      <StyledParagraph></StyledParagraph>
      <StyledLink href={URLS.CART}>
        <svg height="60" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="150" />
        </svg>
        <div>Enjoy</div>
      </StyledLink>
    </StyledContainer>
  );
}
