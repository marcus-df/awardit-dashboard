import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PresetStore = {
  preset: string | null;
  selectPreset: boolean;
  setPreset: (preset: string) => void;
  setSelectPreset: () => void;
  reset: () => void;
};

const initialState = {
  preset: null,
  selectPreset: false,
};

export const usePresetStore = create<PresetStore>()(
  persist(
    (set) => ({
      ...initialState,
      setPreset: (preset) => {
        set(() => ({ preset: preset }));
      },
      setSelectPreset: () =>
        set((state) => ({ selectPreset: !state.selectPreset })),
      reset: () => set(initialState),
    }),
    {
      name: "preset",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ preset: state.preset }),
    }
  )
);
