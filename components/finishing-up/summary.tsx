"use client";

import { useGlobal } from "@/zustand/global";

const Summary = () => {
  const { isYearly } = useGlobal();
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-pastelBlue w-full h-1/2 flex flex-col p-4 rounded-md gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-marineBlue font-bold">
              Arcade {isYearly ? "(Yearly)" : "(Monthly)"}
            </p>
            <p className="hover:underline text-sm font-normal">Change</p>
          </div>
          <div>Amount</div>
        </div>
        <hr />
        <div></div>
      </div>
      <div className="flex justify-between items-center w-full p-4">
        <p className="text-coolGray font-normal text-xs">
          Total {isYearly ? "(per year)" : "(per month)"}
        </p>
        <p className="text-purplishBlue font-bold text-lg">+$Amount/{isYearly ? "yr" : "mo"}</p>
      </div>
    </div>
  );
};

export default Summary;
