import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../Product/ProductCard";

const initialState = {
  success: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ORDER_SUCCESS_PAY":
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};

const PaymentButton = ({ paymentMethod, orderId, amount, onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const { success } = state;
  console.log("success value: ", success);

  const { token } = useSelector((state) => state.token);

  //function to update the payment status
  const paymentHandler = async (paymentDetails) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(
        `http://localhost:3001/api/v1/orders/${orderId}/pay`,
        paymentDetails,
        config
      );
      console.log("Payment successful");
      dispatch({ type: "ORDER_SUCCESS_PAY" });
      console.log("suceess after dispatch", success);
    } catch (error) {
      throw new Error(error);
    }
  };

  // After success payment
  useEffect(() => {
    if (success) {
      toast.success("Payment Successful!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/orderComplete");
    }
  }, [success, navigate]);

  const onKhaltiClick = () => {};

  return (
    <>
      {paymentMethod === "COD" && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            paymentHandler({ payment_method: "COD" });
            submitHandler(e);
          }}
          className="w-full md:w-full py-3 mb-3 my-4 bg-white  text-black rounded-sm hover:bg-neutral-700 border border-black hover:text-white hover:opacity-90 hover:duration-300"
        >
          Confirm PaymentButton
        </button>
      )}

      {paymentMethod === "Khalti" && (
        <button
          type="submit"
          onSubmit={onKhaltiClick}
          className="w-full md:w-full py-3 mb-3 my-4 bg-purple-800  text-white rounded-sm hover:bg-purple-600 border border-black hover:opacity-90 hover:duration-300"
        >
          Pay with Khalti
        </button>
      )}
    </>
  );
};

export default PaymentButton;
