"use client";

import { addOns } from "@/lib/add-ons";
import { plans } from "@/lib/plans";
import { useGlobal } from "@/zustand/global";

const Summary = () => {
  const { isYearly, currentPlan, setCurrentStep, selectedAddOns } = useGlobal();
  const handleClick = () => {
    setCurrentStep(2);
  };
  const selectedAddOnDetails = addOns.filter((addon) => selectedAddOns.includes(addon.id));
  const selectedPlan = plans.find((plan) => plan.id === currentPlan);
  const planPrice = selectedPlan?.price[isYearly ? "yearly" : "monthly"] || 0;
  const addOnsTotal = selectedAddOnDetails.reduce(
    (total, addon) => total + parseFloat(addon.price[isYearly ? "yearly" : "monthly"]),
    0
  );
  const totalPrice = Number(planPrice) + addOnsTotal;

  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-pastelBlue/10 w-full h-auto flex flex-col p-4 rounded-md gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-marineBlue font-bold">
              {selectedPlan?.title} {isYearly ? "(Yearly)" : "(Monthly)"}
            </p>
            <p
              className="hover:underline text-sm text-coolGray md:font-normal font-medium"
              onClick={handleClick}
            >
              Change
            </p>
          </div>
          <div className="text-marineBlue font-bold">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-4 h-auto">
          {selectedAddOnDetails.map((addon) => (
            <div key={addon.id} className="flex justify-between w-full">
              <p className="text-coolGray text-sm md:font-normal font-medium">{addon.name}</p>
              <p className="text-marineBlue md:font-normal font-medium text-sm">
                +${addon.price[isYearly ? "yearly" : "monthly"]}/{isYearly ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-4">
        <p className="text-coolGray md:font-normal font-medium text-sm">
          Total {isYearly ? "(per year)" : "(per month)"}
        </p>
        <p className="text-purplishBlue font-bold text-lg">
          +${totalPrice}/{isYearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
