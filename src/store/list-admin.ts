import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { adminArray } from "@/data/list-admin";

const initialState = {
  list: adminArray
}

export const useAdminListStore = create<LinkListStore>()(
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
