import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, saveOriginalData, searchInit } from "../redux/actions";
import axios from "axios";

import "./ParentComponent.css";

export default function ParentComponent() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  function getDataFromAPI() {
    console.log("I am sending action");
    dispatch(getUsers("I am sending value from component ----> "));
  }
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json"
      )
      .then((response) => dispatch(saveOriginalData(response.data)));
  }, []);
  const onChangeHandler = (event) => {
    dispatch(
      searchInit({
        searchTerm: event.target.value,
        originalData: store.originalData,
      })
    );
  };
  console.log("getting reducer as ", store);
  return (
    <div>
      ParentComponent
      <button onClick={getDataFromAPI}>click me!</button>
      <b>Enter something to search</b>{" "}
      <input type={"text"} onBlur={onChangeHandler}></input>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {store.searchedData.map((item, index) => {
          return (
            <tr key={item.actor.login + item.repo.name + index}>
              <td>{item.actor.login}</td>
              <td>{item.repo.name}</td>
              <td>{item.payload.description}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
