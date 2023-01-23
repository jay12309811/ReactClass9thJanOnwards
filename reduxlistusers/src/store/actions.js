export const getUsers = (params) => ({
  type: "GET_USERS",
  payload: {
    params,
  },
});
export const saveBreedsList = (breedsList) => ({
  type: "SAVE_BREEDS_LIST", // Unique ID
  payload: breedsList,
});
export const saveSelectedCatsList = (selectedCatsList) => ({
  type: "SAVE_SELECTED_CATS_LIST",
  payload: selectedCatsList,
});
