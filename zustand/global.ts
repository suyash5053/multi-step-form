import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  currentStep: number;
  setCurrentStep: (newCurrentStep: number) => void;
  resetCurrentStep: () => void;
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
  currentPlan: number;
  setCurrenPlan: (newCurrentPlan: number) => void;
  selectedAddOns: number[];
  toggleAddOn: (addOnId: number) => void;
  form: any;
  setForm: (form: any) => void;
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
      currentPlan: 1,
      setCurrenPlan: (newCurrentPlan: number) =>
        set((state) => ({ ...state, currentPlan: newCurrentPlan })),
      selectedAddOns: [],
      toggleAddOn: (addOnId: number) =>
        set((state) => ({
          ...state,
          selectedAddOns: state.selectedAddOns.includes(addOnId)
            ? state.selectedAddOns.filter((id) => id !== addOnId)
            : [...state.selectedAddOns, addOnId],
        })),
      form: null,
      setForm: (form) => set((state) => ({ ...state, form })),
    }),
    {
      name: "global-storage",
    }
  )
);
