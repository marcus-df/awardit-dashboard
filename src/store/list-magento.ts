import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { magentoArray } from "@/data/list-magento";

type MagentoListStore = {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
  delete: (name: string) => void;
  reset: () => void;
};

const initialState = {
  list: magentoArray
}

export const useMagentoListStore = create<MagentoListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (name) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== name),
        })),
      reset: () => set(initialState)
    }),
    {
      name: "magento-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
