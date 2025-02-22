"use client";

import { Button } from "../ui/button";
import PlanCards from "./plan-cards";
import TogglePlan from "./toggle-plan";

const Plans = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Select your plan</h1>
        <p className="text-base">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="h-full pt-6 relative gap-8 flex flex-col">
        <PlanCards />
        <TogglePlan />
      </div>
      <div className="flex w-full justify-between items-end">
        <Button
          variant={"link"}
          type="submit"
          className="w-1/4 h-12 text-marineBlue hover:no-underline"
        >
          Go Back
        </Button>
        <Button
          type="submit"
          className="w-1/4 h-12 bg-marineBlue hover:bg-marineBlue/85 rounded-lg"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Plans;
