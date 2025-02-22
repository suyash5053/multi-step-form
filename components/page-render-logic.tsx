"use client";

import { useGlobal } from "@/zustand/global";
import ProfileInformation from "./profile-info";
import Plans from "./plan";
import AddOns from "./add-ons";
import FinishingUp from "./finishing-up";
import { useEffect } from "react";

const PageRenderLogic = () => {
  const { currentStep, resetCurrentStep } = useGlobal();

  useEffect(() => {
    resetCurrentStep();
  }, [resetCurrentStep]);

  return (
    <>
      {currentStep === 1 && <ProfileInformation />}
      {currentStep === 2 && <Plans />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <FinishingUp />}
    </>
  );
};

export default PageRenderLogic;
