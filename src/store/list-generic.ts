import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  list: [],
  title: "Generic",
};

export const useGenericListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialState,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
        })),
      changeTitle: (title) => set(() => ({ title: title })),
      reset: () => set(initialState),
    }),
    {
      name: "list-generic",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
