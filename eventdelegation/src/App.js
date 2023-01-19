import logo from "./logo.svg";
import "./App.css";
import Child1 from "./Child1";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <div onClick={handleClick} className="App">
      <Child1 />
    </div>
  );
}

export default App;
