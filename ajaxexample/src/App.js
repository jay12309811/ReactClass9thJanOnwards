import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  function callGetAPI() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setApiResponse(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  function callPOSTApi() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setApiResponse(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button onClick={callGetAPI}>GET Call</button>
      <br />
      <button onClick={callPOSTApi}>POST Call</button>
      <br />
      <code>{apiResponse + ""}</code>
    </div>
  );
}

export default App;
