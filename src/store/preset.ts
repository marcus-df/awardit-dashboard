import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PresetStore = {
  preset: string | null;
  selectPreset: boolean;
  setPreset: (preset: string) => void;
  setSelectPreset: () => void;
};

export const usePresetStore = create<PresetStore>()(
  persist((set) => ({
    preset: null,
    selectPreset: false,
    setPreset: (preset) => {
      set(() => ({ preset: preset }));
    },
    setSelectPreset: () => set((state) => ({ selectPreset: !state.selectPreset }))
  }), 
  { 
    name: "preset",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ preset: state.preset })
  }
  ),
);