import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { UniqueIdentifier } from "@dnd-kit/core";

interface CustomListsStore {
  lists: { id: UniqueIdentifier; listName: string }[];
  update: (lists: { id: UniqueIdentifier; listName: string }[]) => void;
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
