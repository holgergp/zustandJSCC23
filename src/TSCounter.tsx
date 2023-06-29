import { useTSCounterstore } from "./tsStore.ts";

export const TSCounter = ()  => {
  const tsCounterstore = useTSCounterstore();
  return (
    <>
      <h3>And I use the Typescript Counter Store</h3>

      <button onClick={() => tsCounterstore.incrementCounter()}>
        count is {tsCounterstore.counter}
      </button>
    </>
  );
};
