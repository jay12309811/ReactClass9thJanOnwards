import logo from "./logo.svg";
import "./App.css";
import { SnackbarProvider } from "notistack";
import ChildComponent from "./ChildComponent";
function App() {
  return (
    <SnackbarProvider maxSnack={10}>
      <div className="App">
        <ChildComponent />
      </div>
    </SnackbarProvider>
  );
}

export default App;
