import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CustomListsStore {
  lists: { id: number; listName: string }[];
  update: (lists: { id: number; listName: string }[]) => void;
  reset: () => void;
}

const initialState = {
  lists: [],
};

export const useCustomListsStore = create<CustomListsStore>()(
  persist(
    (set) => ({
      ...initialState,
      update: (lists) => set({ lists }),
      reset: () => set(initialState),
    }),
    {
      name: "custom-lists",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
