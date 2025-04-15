import type { LinkFieldItem } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { magentoArray } from "@/data/list-magento";


type MagentoListStore = {
  list: LinkFieldItem[];
  // increment: () => void;
  // decrement: () => void;
};

export const useMagentoListStore = create<MagentoListStore>()(
  persist((set) => ({
    list: magentoArray,
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 })),
  }), 
  { 
    name: "magento-list",
    storage: createJSONStorage(() => localStorage),
    // partialize: (state) => ({ count: state.count })
  }
  ),
);
