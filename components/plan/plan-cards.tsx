"use client";

import { plans } from "@/lib/plans";
import { useGlobal } from "@/zustand/global";
import Image from "next/image";

const PlanCards = () => {
  const { isYearly } = useGlobal();
  return (
    <div className="flex w-full h-2/4 gap-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-1/3 h-full border border-lightGray rounded-md p-3 items-start"
        >
          <div className="flex flex-col justify-between h-full">
            <Image src={plan.icon} alt={plan.title} width={40} height={40} />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-base leading-none">{plan.title}</h1>
              <p className="text-sm text-coolGray">
                {isYearly ? `$${plan.price.yearly}/yr` : `$${plan.price.monthly}/mo`}
              </p>
              {isYearly && (
                <p className="text-xs text-marineBlue font-normal">{plan.yearlyToast}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
