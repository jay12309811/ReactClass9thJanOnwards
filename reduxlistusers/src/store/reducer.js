const initialState = {
  storeValue: "Init value",
  storeValue2: "Init value 2",
  breedsList: [],
  selectedCatsList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "SAVE_BREEDS_LIST":
      console.log(action.payload, " Got payload as");
      return { ...state, breedsList: action.payload };
    case "SAVE_SELECTED_CATS_LIST":
      return { ...state, selectedCatsList: action.payload };
    default:
      return state;
  }
}
