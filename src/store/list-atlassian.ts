import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { atlassianArray } from "@/data/list-atlassian";

const initialState = {
  list: atlassianArray
}

export const useAtlassianListStore = create<LinkListStore>()(
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
      name: "list-atlassian",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
