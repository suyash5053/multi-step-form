import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  currentStep: number;
  setCurrentStep: (newCurrentStep: number) => void;
  resetCurrentStep: () => void;
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

export const useGlobal = create<GlobalState>()(
  persist(
    (set) => ({
      currentStep: 1,
      setCurrentStep: (newCurrentStep: number) =>
        set((state) => ({ ...state, currentStep: newCurrentStep })),
      resetCurrentStep: () => set((state) => ({ ...state, currentStep: 1 })),
      isYearly: false,
      setIsYearly: (isYearly: boolean) => set((state) => ({ ...state, isYearly })),
    }),
    {
      name: "global-storage",
    }
  )
);
