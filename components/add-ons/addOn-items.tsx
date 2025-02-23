"use client";

import { addOns } from "@/lib/add-ons";
import { useGlobal } from "@/zustand/global";
import { Checkbox } from "../ui/checkbox";

const AddOnItems = () => {
  const { isYearly, selectedAddOns, toggleAddOn } = useGlobal();

  return (
    <div className="h-full pt-6 relative gap-6 flex flex-col">
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
            <div className="flex items-center gap-5">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => toggleAddOn(addOn.id)}
                className="data-[state=checked]:bg-purplishBlue p-1 flex items-center justify-center text-xs font-bold"
              />
              <div className="flex flex-col gap-0">
                <p className="font-bold text-base text-marineBlue">{addOn.name}</p>
                <p className="text-sm text-coolGray">{addOn.description}</p>
              </div>
            </div>
            <p className="text-sm text-purplishBlue font-medium">
              {isYearly ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AddOnItems;
