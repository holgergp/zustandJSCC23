import { createStore } from "zustand";
import { devtools } from "zustand/middleware";
import { createBoundedUseStore } from "./zustandUtils.ts";

export const createBearCounterSlice = (set) => ({
  bearCounter: 0,
  incrementBearCounter: () =>
    set((state) => ({ bearCounter: state.bearCounter + 1 })),
  decrementBearCounter: () =>
    set((state) => ({ bearCounter: state.bearCounter - 1 })),
});

export const createFishCounterSlice = (set) => ({
  fishCounter: 0,
  incrementFishCounter: () =>
    set((state) => ({ fishCounter: state.fishCounter + 1 })),
  decrementFishCounter: () =>
    set((state) => ({ fishCounter: state.fishCounter - 1 })),
});

export const slicedStore = createStore(
  devtools((...a) => ({
    ...createBearCounterSlice(...a),
    ...createFishCounterSlice(...a),
  }))
);

export const usePlainJSSlicedCounterstore = createBoundedUseStore(slicedStore);
