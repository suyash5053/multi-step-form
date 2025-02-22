"use client";

import { useGlobal } from "@/zustand/global";
import ProfileInformation from "../components/profile-info";
import Plans from "../components/plan";
import AddOns from "../components/add-ons";
import FinishingUp from "../components/finishing-up";
import { useEffect } from "react";

const PageRenderer = () => {
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

export default PageRenderer;
