import UserService from "../../services/UserService";
import { GET_USER_LIST } from "../action-types";

export function fetchUserList(params) {
  return function (dispatch) {
    dispatch({ type: GET_USER_LIST.pending });
    UserService.getList(params).then((res) => {
      try {
        dispatch({ type: GET_USER_LIST.fulfilled, payload: res.results });
      } catch (Error) {
        dispatch({ type: GET_USER_LIST.rejected, error: Error });
      }
    });
  };
}
