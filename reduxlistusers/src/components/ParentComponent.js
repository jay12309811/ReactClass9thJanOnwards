import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Dropdown, Space } from "antd";
import axios from "axios";
import { DownOutlined } from "@ant-design/icons";
import { saveBreedsList, saveSelectedCatsList } from "../store/actions";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get("https://api.thecatapi.com/v1/breeds").then((response) => {
      console.log(response.data, " Got response as");
      this.props.callSaveBreedsListAction(response.data);
    });
  }
  getAllCatsForBreed = (id) => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?breed_ids=" + id)
      .then((response) => {
        console.log(response.data, " Got response as for cats under breed");
        this.props.callSaveSelectedCatsList(response.data);
      });
  };
  render() {
    console.log("I received props as ", this.props);
    const items = this.props.breedsList.map((breed) => ({
      label: (
        <b
          onClick={() => {
            this.getAllCatsForBreed(breed.id);
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
          {this.props.selectedCatsList.map((cat) => {
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
}
const mapStateToProps = (store) => {
  return store; //{ value: store.storeValue2 };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    callSaveBreedsListAction: (breedsList) =>
      dispatch(saveBreedsList(breedsList)),
    callSaveSelectedCatsList: (selectedCatsList) =>
      dispatch(saveSelectedCatsList(selectedCatsList)),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ParentComponent
);
