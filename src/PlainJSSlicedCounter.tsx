import { usePlainJSSlicedCounterstore } from "./plainJSStoreSliced.js";

export const PlainJSSlicedCounter = () => {
  const plainJSSlicedCounterstore = usePlainJSSlicedCounterstore();
  return (
    <>
      <h3>And I use the plain JS Sliced Counter Store</h3>

      <button
        onClick={() => {
          plainJSSlicedCounterstore.incrementBearCounter();
          plainJSSlicedCounterstore.incrementFishCounter();
        }}
      >
        fish count is {plainJSSlicedCounterstore.fishCounter}
        &nbsp; bear count is {plainJSSlicedCounterstore.bearCounter}
      </button>
    </>
  );
};
