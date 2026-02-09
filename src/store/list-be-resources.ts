import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { beResourcesArray } from "@/data/list-be-resources";

const initialState = {
  list: beResourcesArray
}

export const useBeResourcesListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
      })),
      reset: () => set(initialState)
    }),
    {
      name: "list-admin",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
