import { useState } from "react";
import "./App.css";
import FuncChild1 from "./FuncChild1";
import FuncChild2 from "./FuncChild2";
// Parent
function App() {
  const [valueForFuncComp1, setValueForFuncComp1] = useState("");
  const [valueForFuncComp2, setValueForFuncComp2] = useState("");
  const updateValueForComp1 = (event) => {
    setValueForFuncComp1(event.target.value);
  };
  const updateValueForComp2 = (event) => {
    setValueForFuncComp2(event.target.value);
  };
  return (
    <div className="App">
      <div key={'abcd123'}>
        Send Value to FuncChild1 -
        <input type={"text"} onBlur={updateValueForComp1} />
        <FuncChild1 value={valueForFuncComp1} />
      </div>
      <div key={'abcd1234'}>
        Send Value to FuncChild2 -
        <input type={"text"} onBlur={updateValueForComp2} />
        <FuncChild2 value={valueForFuncComp2} />
      </div>
    </div>
  );
}

export default App;
