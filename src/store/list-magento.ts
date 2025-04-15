import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { magentoArray } from "@/data/list-magento";

type MagentoListStore = {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
};

export const useMagentoListStore = create<MagentoListStore>()(
  persist(
    (set) => ({
      list: magentoArray,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
    }),
    {
      name: "magento-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
