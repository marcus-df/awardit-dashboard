import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { awarditAdminArray } from "@/data/list-awardit-admin";

type AwarditAdminListStore = {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
  reset: () => void;
};

const initialState = {
  list: awarditAdminArray
}

export const useAwarditAdminListStore = create<AwarditAdminListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      reset: () => set(initialState)
    }),
    {
      name: "awardit-admin-list",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
