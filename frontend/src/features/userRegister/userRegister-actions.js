import axios from "axios";
import {
  userRegisterFail,
  userRegisterRequest,
  userRegisterSuccess,
} from "./userRegister-slice";

export const registerUser = (registrationDetails) => {
  return async (dispatch) => {
    const { firstName, lastName, contact, email, password } =
      registrationDetails;

    // console.log(firstName);

    try {
      //   dispatch(userRegisterRequest());

      // req body configurations
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // data from response (res from backend)
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/register",
        { firstName, lastName, contact, email, password },
        config
      );

      //   dispatch(userRegisterSuccess(data.message));
    } catch (error) {
      // the error is first handled in
      // custom error handler in errorMiddlewares.js
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      //   dispatch(userRegisterFail(errorMessage));
    }
  };
};
