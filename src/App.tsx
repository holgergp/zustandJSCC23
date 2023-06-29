import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PlainJSCounter } from "./PlainJSCounter.jsx";
import { TSCounter } from "./TSCounter.jsx";
import { TSSlicedCounter } from "./TSSlicedCounter.tsx";
import { PlainJSSlicedCounter } from "./PlainJSSlicedCounter.tsx";
function App() {
  return (
    <>
      <PlainJSCounter />
      <TSCounter />
      <TSSlicedCounter />
      <PlainJSSlicedCounter />
    </>
  );
}

export default App;
