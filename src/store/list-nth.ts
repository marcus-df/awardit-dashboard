import type { LinkListStore } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { beResourcesArray } from "@/data/list-be-resources";
import { feResourcesArray } from "@/data/list-fe-resources";

const initialStateSecond = {
  list: beResourcesArray,
  title: "BE Resources"
}

const initialStateThird = {
  list: feResourcesArray,
  title: "FE Resources"
}

const initialStateForth = {
  list: [],
  title: "Generic"
}

export const useSecondListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialStateSecond,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
      })),
      changeTitle: (title) => set(() => ({ title: title })),
      reset: () => set(initialStateSecond)
    }),
    {
      name: "list-nth-second",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useThirdListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialStateThird,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
        })),
      changeTitle: (title) => set(() => ({ title: title })),
      reset: () => set(initialStateThird),
    }),
    {
      name: "list-nth-third",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useForthListStore = create<LinkListStore>()(
  persist(
    (set) => ({
      ...initialStateForth,
      add: (item) => set((state) => ({ list: [...state.list, item] })),
      delete: (title) =>
        set((state) => ({
          list: state.list.filter((item) => item.title !== title),
        })),
      changeTitle: (title) => set(() => ({ title: title })),
      reset: () => set(initialStateForth),
    }),
    {
      name: "list-nth-forth",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

