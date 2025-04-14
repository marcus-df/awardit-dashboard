import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>()(
  persist((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }), 
  { 
    name: "count-persist",
    storage: createJSONStorage(() => localStorage)
  }
  ),
);
