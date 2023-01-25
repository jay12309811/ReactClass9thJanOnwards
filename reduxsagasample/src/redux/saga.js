import { put, takeLatest } from "redux-saga/effects";
import { getUsersSaveToReducer, GET_DATA, saveSearchedData, SEARCH_INITIATE } from "./actions";

// eslint-disable-next-line require-yield
function* getDataSaga(action) {
  try {
    console.log("Received action in Saga as ", action);
    //   const response = yield call(getPosts);
    yield put(
      getUsersSaveToReducer(action.payload + " Attaching something from saga !")
    );
  } catch (error) {}
}

// eslint-disable-next-line require-yield
function* searchInitSaga(action) {
  const { searchTerm, originalData } = action.payload;
  const resultArray = [];
  originalData.forEach((item) => {
    if (item && item.repo && item.repo.name.includes(searchTerm)) {
      resultArray.push(item);
    }
  });
  yield put(saveSearchedData(resultArray))
}

export default function* () {
  yield takeLatest(GET_DATA, getDataSaga); // ANY ACTION WITH ID GET_DATA -> CALL getDataSaga
  yield takeLatest(SEARCH_INITIATE, searchInitSaga);
}
