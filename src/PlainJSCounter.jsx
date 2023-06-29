import { usePlainJSCounterstore } from "./plainJSStore.js";

export const PlainJSCounter = () => {
  const plainJSCounterstore = usePlainJSCounterstore();
  return (
    <>
      <h3>I'm a Plain JS Counter</h3>
      <button onClick={() => plainJSCounterstore.incrementCounter()}>
        count is {plainJSCounterstore.counter}
      </button>
    </>
  );
};
