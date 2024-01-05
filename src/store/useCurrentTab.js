import create from "vue-zustand";

export const useCurrentTab = create((set) => ({
  currentSearchTab: "Name",
  currentOptionTab: "Home",
  updateSearchTab: (tabName) => set(() => ({ currentSearchTab: tabName })),
  updateOptionTab: (tabName) => set(() => ({ currentOptionTab: tabName })),
}));
