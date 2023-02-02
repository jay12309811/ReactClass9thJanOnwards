import "./App.css";
import HOCParent from "./components/HOCParent";
import ChildType1 from "./components/ChildType1";
import ChildType2 from "./components/ChildType2";

function App() {
  return (
    <div className="App">
      <HOCParent>
        <ChildType1 />
      </HOCParent>
      <HOCParent>
        <ChildType2 />
      </HOCParent>
    </div>
  );
}

export default App;
