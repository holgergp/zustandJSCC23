import { createStore, useStore } from "zustand";
import { devtools } from "zustand/middleware";

export const initialSimpleCounterStoreState = { counter: 0 };

export const plainJSCounterStore = createStore(
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

export const usePlainJSCounterstore = () => useStore(plainJSCounterStore);
