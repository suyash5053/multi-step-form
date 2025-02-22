import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

export const useGlobal = create<GlobalState>()(
  persist(
    (set) => ({
      isYearly: false,
      setIsYearly: (isYearly: boolean) => set((state) => ({ ...state, isYearly })),
    }),
    {
      name: "global-storage",
    }
  )
);
