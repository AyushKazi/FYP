import axios from "axios";
import { setIsAuthenticated, setUserInfo } from "./authUser-slice";

export const authUser = (loginDetails) => {
  return async (dispatch) => {
    const { email, password } = loginDetails;

    try {
      // dispatch(userAuthRequest)

      //req body configurations

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // login
      // axios.post(url, data, config)
      // data will come from backend server
      // data => message + token
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );

      //   dispatch(userAuthSuccess(data.message));

      dispatch(setIsAuthenticated(true));

      localStorage.setItem("firstLogin", true);
    } catch (error) {
      console.log(error);
    }
  };
};

// called after getting the token from cookie
export const fetchAuthUser = (token) => {
  return async (dispatch) => {
    const response = await axios.get("/api/v1/user/info", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(
      setUserInfo({
        user: response.data,
        isAdmin: response.data.role === 1 ? true : false,
      })
    );

    dispatch(setIsAuthenticated(true));
  };
};
