import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { awarditAdminArray } from "@/data/list-awardit-admin";

type AwarditAdminListStore = {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
};

export const useAwarditAdminListStore = create<AwarditAdminListStore>()(
  persist(
    (set) => ({
      list: awarditAdminArray,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
    }),
    {
      name: "awardit-admin-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
