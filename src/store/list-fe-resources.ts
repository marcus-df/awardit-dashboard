import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist, } from "zustand/middleware";
import { feResourcesArray } from "@/data/list-fe-resources";

const initialState = {
  list: feResourcesArray,
  title: "FE Resources"
};

export const useFeResourcesListStore = create<LinkListStore>()(
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
      name: "list-fe-resources",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
