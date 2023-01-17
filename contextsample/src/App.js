import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { useState } from "react";
import { CounterContext } from "./context/CounterContext";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          counterValue: counter,
          updateFuncCounter: setCounter,
        }}
      >
        <LandingPage />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
