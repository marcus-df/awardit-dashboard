import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CustomListsStore } from "@/types";

const initialState = {
  lists: [],
};

export const useCustomListsStore = create<CustomListsStore>()(
  persist(
    (set) => ({
      ...initialState,
      update: (lists) => set({ lists }),
      remove: (id) =>
        set((state) => ({
          lists: state.lists.filter((list) => list.uid !== id),
        })),
      reset: () => set(initialState),
    }),
    {
      name: "custom-lists",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
