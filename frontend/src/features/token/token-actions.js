import axios from "axios";
import { setToken } from "./token-slice";

export const getToken = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/refreshToken",
        null
      );
      dispatch(setToken(data.accessToken));
    } catch (error) {
      localStorage.removeItem("firstlogin");
    }
  };
};
