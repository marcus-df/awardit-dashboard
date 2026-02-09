import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { generalArray } from "@/data/list-general";

const initialState = {
  list: generalArray,
};

export const useGeneralListStore = create<LinkListStore>()(
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
      name: "list-general",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
