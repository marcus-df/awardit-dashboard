import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { atlassianArray } from "@/data/list-atlassian";

type AtlassianListStore = {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
};

export const useAtlassianListStore = create<AtlassianListStore>()(
  persist(
    (set) => ({
      list: atlassianArray,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
    }),
    {
      name: "atlassian-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
