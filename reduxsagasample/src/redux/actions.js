export const GET_DATA = "GET_DATA";
export const GET_DATA_DAVE_REDUCER = "GET_DATA_DAVE_REDUCER";
export const SAVE_ORIGINAL_DATA = "SAVE_ORIGINAL_DATA";
export const SEARCH_INITIATE = "SEARCH_INITIATE";
export const SAVE_SEARCHED_DATA = "SAVE_SEARCHED_DATA";

export const getUsers = (params) => ({
  type: GET_DATA,
  payload: params,
});
export const getUsersSaveToReducer = (params) => ({
  type: GET_DATA_DAVE_REDUCER,
  payload: params,
});

export const saveOriginalData = (params) => ({
  type: SAVE_ORIGINAL_DATA,
  payload: params,
});

export const searchInit = (params) => ({
  type: SEARCH_INITIATE,
  payload: params,
});
export const saveSearchedData = (params) => ({
  type: SAVE_SEARCHED_DATA,
  payload: params,
});
