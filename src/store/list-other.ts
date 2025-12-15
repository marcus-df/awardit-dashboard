import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  list: [],
};

export const useOtherListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
        })),
      reset: () => set(initialState),
    }),
    {
      name: "list-other",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
