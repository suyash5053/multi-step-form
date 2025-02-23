"use client";

import { plans } from "@/lib/plans";
import { useGlobal } from "@/zustand/global";
import Image from "next/image";

const PlanCards = () => {
  const { isYearly, currentPlan, setCurrenPlan } = useGlobal();
  const handleClick = (id: number) => {
    setCurrenPlan(id);
  };

  return (
    <div className="flex w-full h-1/2 gap-4">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`flex flex-col gap-4 w-1/3 h-full border rounded-md p-3 items-start hover:border-purplishBlue ${
            currentPlan === plan.id ? "border-purplishBlue bg-pastelBlue/10" : "border-lightGray"
          }`}
          onClick={() => handleClick(plan.id)}
        >
          <div className="flex flex-col justify-between h-full">
            <Image src={plan.icon} alt={plan.title} width={40} height={40} />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-base leading-none">{plan.title}</p>
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
