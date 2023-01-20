import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducer";
import ParentComponent from "./components/ParentComponent";
import ParentFuncComponent from "./components/ParentFuncComponent";
const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <ParentComponent />
        <ParentFuncComponent/>
      </div>
    </Provider>
  );
}

export default App;
