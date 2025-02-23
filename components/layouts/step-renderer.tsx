"use client";

import { useGlobal } from "@/zustand/global";
import { steps } from "@/lib/steps";

const StepRenderer = () => {
  const { currentStep } = useGlobal();
  return (
    <div className="absolute top-0 w-auto md:w-full flex justify-center md:flex-col gap-8 p-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center space-x-4 h-10">
          <div
            className={`w-9 h-9  font-bold rounded-full flex items-center justify-center ${
              currentStep == step.number
                ? "text-black bg-lightBlue"
                : "border border-white text-lightGray"
            }`}
          >
            {step.number}
          </div>
          <div className="md:block hidden">
            <p className="text-sm text-coolGray leading-1">{step.label}</p>
            <p className=" text-base leading-1 font-semibold text-lightGray">{step.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepRenderer;
