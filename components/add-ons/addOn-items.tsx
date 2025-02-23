"use client";

import { addOns } from "@/lib/add-ons";
import { useGlobal } from "@/zustand/global";
import { Checkbox } from "../ui/checkbox";

const AddOnItems = () => {
  const { isYearly, selectedAddOns, toggleAddOn } = useGlobal();

  return (
    <div className="h-full md:pt-6 relative md:gap-6 gap-3 flex flex-col">
      {addOns.map((addOn) => {
        const isSelected = selectedAddOns.includes(addOn.id);

        return (
          <div
            key={addOn.id}
            className={`flex justify-between items-center border rounded-md p-4 cursor-pointer ${
              isSelected ? "border-purplishBlue bg-alabaster" : "hover:border-purplishBlue"
            }`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            <div className="flex items-center md:gap-5 gap-3">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => toggleAddOn(addOn.id)}
                className="data-[state=checked]:bg-purplishBlue p-1 flex items-center justify-center text-xs font-bold"
              />
              <div className="flex flex-col">
                <p className="font-bold md:text-base text-sm text-marineBlue">{addOn.name}</p>
                <p className="md:text-sm text-xs font-medium md:font-normal text-coolGray">
                  {addOn.description}
                </p>
              </div>
            </div>
            <p className="md:text-sm text-xs text-purplishBlue font-medium">
              {isYearly ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AddOnItems;
