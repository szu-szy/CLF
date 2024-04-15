"use client";

import {
  GRID_AREA,
  StyledButton,
  StyledContainer,
  StyledHeader,
} from "./StepperNav.theme";

import { useStepperNav } from "./useStepperNav";

export const StepperNav = () => {
  const {
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
  } = useStepperNav();

  return (
    <StyledContainer>
      <>
        {!isFirstStep && !isLastStep && !isSummaryStep && (
          <StyledButton area={GRID_AREA.BACK} onClick={handlePrev}>
            Back
          </StyledButton>
        )}
      </>
      <StyledHeader>{getStateHeader()}</StyledHeader>
      <>
        {isAddressingOrShipping && (
          <StyledButton area={GRID_AREA.SKIP} onClick={handleSkip}>
            skip
          </StyledButton>
        )}
      </>
      <>
        {!isLastStep && !isSummaryStep && (
          <StyledButton
            disabled={isNextButtonDisabled()}
            area={GRID_AREA.NEXT}
            onClick={handleNext}
          >
            Next
          </StyledButton>
        )}
      </>
      <>
        {isLastStep && (
          <StyledButton area={GRID_AREA.NEXT} onClick={handleComplete}>
            Complete
          </StyledButton>
        )}
      </>
    </StyledContainer>
  );
};
