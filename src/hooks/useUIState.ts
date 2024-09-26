import tCategory from "@/types/category";
import { create } from "zustand";

type tUIState = {
  homeCategory: tCategory;
  setHomeCategory: (data: Partial<tCategory>) => void;
};

const useUIState = create<tUIState>((set) => ({
  homeCategory: {
    label: "",
    src: "https://plus.unsplash.com/premium_photo-1725873536636-9f8133411637?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  setHomeCategory: (data: Partial<tCategory>) =>
    set((state) => {
      const newCategory = { ...state.homeCategory, ...data };
      return { homeCategory: newCategory };
    }),
}));

export default useUIState;
