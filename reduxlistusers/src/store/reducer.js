const initialState = {
  storeValue: "Init value",
  storeValue2: 'Init value 2'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
