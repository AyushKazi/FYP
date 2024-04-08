import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const PaymentButton = ({ paymentMethod, orderId, amount }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const { success } = state;
  console.log("success value: ", success);

  const { token } = useSelector((state) => state.token);

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
      console.log("Checking navigation effect", success);

      navigate("/", {
        replace: true,
        state: { from: "payment", orderId: orderId },
      });
    }
  }, [success, navigate, orderId]);

  return (
    <>
      {paymentMethod === "COD" && (
        <button
          type="submit"
          onClick={() => paymentHandler({ payment_method: "COD" })}
          className="w-full md:w-full py-3 mb-3 my-4 bg-white  text-black rounded-sm hover:bg-neutral-700 border border-black hover:text-white hover:opacity-90 hover:duration-300"
        >
          Confirm PaymentButton
        </button>
      )}
    </>
  );
};

export default PaymentButton;
