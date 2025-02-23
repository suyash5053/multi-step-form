"use client";

import { useGlobal } from "@/zustand/global";
import { Button } from "../ui/button";

const Footer = () => {
  const { currentStep, setCurrentStep, form } = useGlobal();

  const handleNext = async (e: React.MouseEvent) => {
    if (currentStep === 1) {
      const result = await form.trigger();
      if (!result) return;
    }
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex w-full justify-between items-end">
      {currentStep !== 1 && (
        <Button
          variant={"link"}
          type="button"
          className="w-1/4 h-12 text-marineBlue hover:no-underline items-center justify-start md:p-0 px-4 font-medium"
          onClick={handleBack}
        >
          Go Back
        </Button>
      )}
      {currentStep === 1 && <div className="w-1/4" />}
      <Button
        type="button"
        className={`w-1/4 h-12 md:rounded-lg rounded-sm ${
          currentStep === 4
            ? "bg-purplishBlue hover:bg-purplishBlue/85"
            : "bg-marineBlue hover:bg-marineBlue/85"
        }`}
        onClick={handleNext}
      >
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </Button>
    </div>
  );
};

export default Footer;
