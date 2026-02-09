import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { feFrameworksArray } from "@/data/list-fe-frameworks";

const initialState = {
  list: feFrameworksArray,
};

export const useFeFrameworksListStore = create<LinkListStore>()(
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
      name: "list-fe-frameworks",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
