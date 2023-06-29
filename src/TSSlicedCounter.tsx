import { useTSSlicedCounterstore } from "./tsStoreSliced.ts";

export const TSSlicedCounter = () => {
  const tsSlicedCounterstore = useTSSlicedCounterstore();
  return (
    <>
      <h3>And I use the Typescript Sliced Counter Store</h3>

      <button
        onClick={() => {
          tsSlicedCounterstore.incrementBearCounter();
          tsSlicedCounterstore.incrementFishCounter();
        }}
      >
        fish count is {tsSlicedCounterstore.fishCounter}
        &nbsp; bear count is {tsSlicedCounterstore.bearCounter}
      </button>
    </>
  );
};
