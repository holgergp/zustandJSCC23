import { createStore, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { createBoundedUseStore } from "./zustandUtils.ts";

export interface BearSlice {
  bearCounter: number;
  incrementBearCounter: () => void;
  decrementBearCounter: () => void;
}

export const createBearCounterSlice: StateCreator<
  BearSlice,
  [],
  [],
  BearSlice
> = (set) => ({
  bearCounter: 0,
  incrementBearCounter: () =>
    set((state) => ({ bearCounter: state.bearCounter + 1 })),
  decrementBearCounter: () =>
    set((state) => ({ bearCounter: state.bearCounter - 1 })),
});

export interface FishSlice {
  fishCounter: number;
  incrementFishCounter: () => void;
  decrementFishCounter: () => void;
}

export const createFishCounterSlice: StateCreator<
  FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishCounter: 0,
  incrementFishCounter: () =>
    set((state) => ({ fishCounter: state.fishCounter + 1 })),
  decrementFishCounter: () =>
    set((state) => ({ fishCounter: state.fishCounter - 1 })),
});

export const slicedStore = createStore<BearSlice & FishSlice>()(
  devtools((...a) => ({
    ...createBearCounterSlice(...a),
    ...createFishCounterSlice(...a),
  }))
);

export const useTSSlicedCounterstore = createBoundedUseStore(slicedStore);
