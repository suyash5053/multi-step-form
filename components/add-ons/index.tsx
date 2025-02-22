"use client";

import { addOns } from "@/lib/add-ons";
import Footer from "../layouts/footer";
import { Checkbox } from "../ui/checkbox";
import { useGlobal } from "@/zustand/global";

const AddOns = () => {
  const { isYearly } = useGlobal();
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Pick add-ons</h1>
        <p className="text-base">Add-ons help enhance your gaming experience</p>
      </div>
      <div className="h-full pt-6 relative gap-6 flex flex-col">
        {addOns.map((addOn) => (
          <div key={addOn.id} className="flex justify-between items-center border rounded-md p-4">
            <div className="flex items-center gap-4">
              <Checkbox />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base">{addOn.name}</p>
                <p className="text-sm">{addOn.description}</p>
              </div>
            </div>
            <p className="text-sm">{isYearly ? addOn.price.yearly : addOn.price.monthly}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AddOns;
