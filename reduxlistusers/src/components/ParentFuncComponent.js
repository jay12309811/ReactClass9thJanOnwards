import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBreedsList, saveSelectedCatsList } from "../store/actions";

export default function ParentFuncComponent() {
  const reduxStore = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/breeds").then((response) => {
      console.log(response.data, " Got response as");
      dispatch(saveBreedsList(response.data));
    });
  }, []);

  function getAllCatsForBreed(id) {
    axios
      .get("https://api.thecatapi.com/v1/images/search?breed_ids=" + id)
      .then((response) => {
        console.log(response.data, " Got response as for cats under breed");
        dispatch(saveSelectedCatsList(response.data));
      });
  }

  // Create list of items for dropdown
  const items = reduxStore.breedsList.map((breed) => ({
    label: (
      <b
        onClick={() => {
          getAllCatsForBreed(breed.id);
        }}
      >
        {breed.name}
      </b>
    ),
  }));

  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Select Cat Breed <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <br />
      <br />
      <br />
      <div>
        {reduxStore.selectedCatsList.map((cat) => {
          return (
            <img
              src={cat.url}
              key={cat.id}
              width="150px"
              height={"150px"}
              alt="cat-image"
            />
          );
        })}
      </div>
    </div>
  );
}
