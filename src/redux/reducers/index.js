import { GET_USER_LIST } from "../action-types";

export default function (
  state = {
    isLoading: false,
    isEmpty: false,
    errorMsg: null,
    data: [],
  },
  action
) {
  const existingData = state.data;
  const filteredData = action.payload
    ? action.payload.map((data) => {
        return {
          username: data.login.username,
          fullName: data.name.first + " " + data.name.last,
          email: data.email,
          gender: data.gender,
          registered: data.registered.date,
        };
      })
    : null;

  switch (action.type) {
    case GET_USER_LIST.pending:
      return {
        isLoading: true,
        isEmpty: false,
        errorMsg: null,
        data: existingData,
      };
    case GET_USER_LIST.rejected:
      return {
        isLoading: false,
        isEmpty: true,
        errorMsg: action.error,
        data: [],
      };
    case GET_USER_LIST.fulfilled:
      return {
        isLoading: false,
        isEmpty: false,
        errorMsg: null,
        data: filteredData,
      };
    case GET_USER_LIST.reset:
      return {
        isLoading: false,
        isEmpty: true,
        errorMsg: null,
        data: [],
      };
    default:
      return state;
  }
}
