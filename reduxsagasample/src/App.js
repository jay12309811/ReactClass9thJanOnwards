import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "./App.css";
import rootReducer from "./redux/reducer";

import rootSaga from "./redux/saga";
import ParentComponent from "./components/ParentComponent";

const sagaMiddleware = createSagaMiddleware();
const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <ParentComponent />
      </div>
    </Provider>
  );
}

export default App;
