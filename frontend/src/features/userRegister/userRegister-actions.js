import axios from "axios";
import {
  userRegisterFail,
  userRegisterRequest,
  userRegisterSuccess,
} from "./userRegister-slice";
import { toast } from "react-toastify";

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

      toast.success("Registration Successful!", {
        position: "bottom-right",
        style: { backgroundColor: "black", color: "white" },
      });

      //   dispatch(userRegisterSuccess(data.message));
    } catch (err) {
      toast.error(err?.data?.message || err.error);

      //   dispatch(userRegisterFail(errorMessage));
    }
  };
};
