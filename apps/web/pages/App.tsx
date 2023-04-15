import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useStore } from "@aidenpwnz/store";
import { comps } from "@aidenpwnz/components";
import { typo } from "@aidenpwnz/typography";

function App() {
  const [count, setCount] = useState(0);
  const zcount = useStore((s) => s.readTestState());
  const updatezcount = useStore((s) => s.setTestState);

  return (
    <div className="App">
      <div className="flex flex-row w-full">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <typo.h1>this is an external component</typo.h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => updatezcount(zcount + 1)}>
          count is {zcount}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
