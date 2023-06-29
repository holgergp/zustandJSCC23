import { createStore } from "zustand";
import { devtools } from "zustand/middleware";
import { createBoundedUseStore } from "./zustandUtils.ts";

export interface CounterState {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
}
export const initialSimpleCounterStoreState = { counter: 0 };

export const tsCounterStore = createStore<CounterState>()(
  devtools((set, getState) => {
    return {
      ...initialSimpleCounterStoreState,
      incrementCounter: () => {
        const counter = getState().counter + 1;
        set({ counter });
      },
      decrementCounter: () => {
        const counter = getState().counter - 1;
        set({ counter });
      },
    };
  })
);

export const useTSCounterstore = createBoundedUseStore(tsCounterStore);
