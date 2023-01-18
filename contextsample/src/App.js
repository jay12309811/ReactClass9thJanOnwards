import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { useState } from "react";
import { CounterContext } from "./context/CounterContext";

function App() {
  const [counter, setCounter] = useState(0);
  const valueForContext = {
    counterValue: counter,
    updateFuncCounter: setCounter,
  };
  return (
    <div className="App">
      {/** Step2: Create a provider and assign value you want to share to inner child components */}
      <CounterContext.Provider value={valueForContext}>
        <LandingPage />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
