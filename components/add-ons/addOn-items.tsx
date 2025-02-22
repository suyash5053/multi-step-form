"use client";

import { addOns } from "@/lib/add-ons";
import { useGlobal } from "@/zustand/global";
import { Checkbox } from "../ui/checkbox";

const AddOnItems = () => {
  const { isYearly } = useGlobal();
  return (
    <div className="h-full pt-6 relative gap-6 flex flex-col">
      {addOns.map((addOn) => (
        <div key={addOn.id} className="flex justify-between items-center border rounded-md p-4">
          <div className="flex items-center gap-5">
            <Checkbox />
            <div className="flex flex-col gap-0">
              <p className="font-bold text-base">{addOn.name}</p>
              <p className="text-sm">{addOn.description}</p>
            </div>
          </div>
          <p className="text-sm">
            {isYearly ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AddOnItems;
