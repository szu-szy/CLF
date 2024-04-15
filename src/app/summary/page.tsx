"use client";

import { PageContainer } from "@/components/PageContainer/PageContainer";
import { StepperNav } from "@/components/StepperNav/StepperNav";
import { StepperContent } from "@/components/StepperContent/StepperContent";

const Page = () => {
  return (
    <PageContainer>
      <StepperNav />
      <StepperContent />
    </PageContainer>
  );
};

export default Page;
