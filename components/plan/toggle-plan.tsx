"use client";

import { useGlobal } from "@/zustand/global";
import { Switch } from "../ui/switch";

const ToggleSwitch = () => {
  const { isYearly, setIsYearly } = useGlobal();

  return (
    <div className="h-10 justify-center items-center w-full flex gap-4 bg-pastelBlue/10 rounded-md">
      <div className="flex gap-5 items-center">
        <div className={`${isYearly ? "text-coolGray" : "text-marineBlue"} font-medium text-sm`}>
          Monthly
        </div>

        <Switch
          defaultChecked={isYearly}
          onCheckedChange={() => setIsYearly(!isYearly)}
          className="data-[state=checked]:bg-marineBlue data-[state=unchecked]:bg-marineBlue"
        />

        <div className={`${isYearly ? "text-marineBlue" : "text-coolGray"} font-medium text-sm`}>
          Yearly
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
