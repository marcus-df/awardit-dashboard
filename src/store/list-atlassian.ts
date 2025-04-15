import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { atlassianArray } from "@/data/list-atlassian";

interface AtlassianListStore {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
  reset: () => void;
};

const initialState = {
  list: atlassianArray
}

export const useAtlassianListStore = create<AtlassianListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      reset: () => set(initialState),
    }),
    {
      name: "atlassian-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
