export const getUsers = (params) => ({
  type: "GET_USERS",
  payload: {
    params,
  },
});
