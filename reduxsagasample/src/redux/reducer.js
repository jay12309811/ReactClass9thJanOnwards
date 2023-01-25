import {
  GET_DATA_DAVE_REDUCER,
  SAVE_ORIGINAL_DATA,
  SAVE_SEARCHED_DATA,
} from "./actions";

const initialState = {
  value: "Sample Value",
  originalData: [],
  searchedData: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA_DAVE_REDUCER:
      console.log("I am in reducer", JSON.stringify(action.payload));
      return state;
    case SAVE_ORIGINAL_DATA:
      return {
        ...state,
        originalData: action.payload,
        searchedData: action.payload,
      };
    case SAVE_SEARCHED_DATA:
      return { ...state, searchedData: action.payload };
    default:
      return state;
  }
}

// action -----------> saga : some results for reducer
// action  -----------> reducer

// action -----> saga : do some operation : result ----> reducer
/// 2 actions 1 -> component to saga 2 -> saga to reducer
