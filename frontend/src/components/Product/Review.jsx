import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "./ProductCard";

const Review = ({ reviews, reviewUpdated }) => {
  // For Review Form
  const [rating, setRating] = useState("3");
  const [comment, setComment] = useState("");

  // To access id from param
  const params = useParams();

  // To Check if user is logged in
  const { userInfo } = useSelector((state) => state.authUser);
  const { token } = useSelector((state) => state.token);

  // To check if the user has already submitted review
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [userHasBought, setUserHasBought] = useState(null);

  console.log(userInfo);

  useEffect(() => {
    const check = async () => {
      const { data } = await axios.get(`${apiUrl}/api/v1/orders/myorders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // console.log(data);

      let result = false;
      data.forEach((order) => {
        if (order.status === "Delivered") {
          order.products.forEach((product) => {
            if (product.product_id === parseInt(params.id)) {
              result = true;
              return;
            }
          });
        }
      });

      // console.log(result);

      setUserHasBought(result ? result : false);
    };

    if (token) {
      check();
    }
  }, [token, params.id]);

  // useEffect to evaluate reviews
  useEffect(() => {
    let result;
    if (userInfo) {
      result = reviews.some(
        (review) => review.user.user_id === userInfo.user_id
      );
    }

    // if submitted
    if (result) {
      setAlreadySubmitted(true);
    } else {
      setAlreadySubmitted(false);
    }
  }, [reviews, userInfo, setAlreadySubmitted]);

  //submit handler for review button
  const submitHandler = async (e) => {
    e.preventDefault();

    const review = { rating, comment };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `${apiUrl}/api/v1/products/${params.id}/reviews`,
        review,
        config
      );

      toast.success("Review submitted!", {
        position: "top-right",
        style: { backgroundColor: "black", color: "white" },
      });

      setComment("");

      reviewUpdated();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  //   const reviews1 = [
  //     { fname: "Ayush", rating: 2, comment: "It was as expected" },
  //     { fname: "Kazi", rating: 5, comment: "Awesome!!" },
  //   ];
  return (
    <>
      <div className="description lg:my-8 px-2 md:px-0  my-8">
        <div className="title flex justify-between uppercase font-semibold  text-sm rounded-t-md bg-neutral-300 text-black px-2 py-1 lg:py-2 lg:px-6 border-x-2 border-neutral-900">
          <p>Reviews</p>
          <button className="text-lg lg:text-xl">
            <FaCaretDown />
          </button>
        </div>
        <div className="description border rounded-b-md text-xs space-y-4  md:text-lg lg:text-sm  px-4 lg:px-6 py-2 text-justify">
          <div className="">
            {reviews.length === 0 ? (
              <p className="pt-2 text-red-500">There are no reviews yet.</p>
            ) : (
              <div className="">
                {reviews.map((review) => {
                  return (
                    <div className="my-4 bg-neutral-200 rounded-sm flex">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-500 ml-2 my-4">
                        <span className="text-white font-medium">{`${review.user.first_name[0]}${review.user.last_name[0]}`}</span>
                      </div>
                      <div className="px-3">
                        <p className="mx-1 py-1 pt-3">
                          {review.user.first_name} ({" "}
                          {review.createdAt.substr(0, 10)} )
                        </p>
                        <Rating value={review.rating} />

                        <p className="px-1 py-2 text-sm">{review.comment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {userInfo ? (
            <>
              {userHasBought === null ? (
                <></>
              ) : userHasBought === false ? (
                <>
                  {" "}
                  <div
                    className="bg-neutral-100 border border-neutral-400 text-neutral-600 px-4 py-3  rounded relative"
                    role="alert"
                  >
                    <strong class="font-bold">Buy </strong>
                    <span class="block sm:inline">
                      product to submit a review !
                    </span>
                  </div>
                </>
              ) : alreadySubmitted ? (
                <>
                  <div
                    className="bg-neutral-100 border border-neutral-400 text-neutral-600 px-4 py-3  rounded relative"
                    role="alert"
                  >
                    <strong class="font-bold">Already </strong>
                    <span class="block sm:inline">submitted a review !</span>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={submitHandler}
                    action=""
                    className=" flex flex-col gap-4  "
                  >
                    <h3 className="font-medium">Write a review</h3>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className=" w-36 p-2 border border-gray-300 rounded-md  focus:outline-slate-400"
                    >
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>

                    <div className="reviewArea border border-neutral-400 h-20 ">
                      <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full h-full focus:shadow-lg  p-2 focus:outline-slate-400"
                      />
                    </div>

                    <button className="w-36 px-10 py-2  bg-neutral-700 text-white rounded-md hover:bg-white border hover:border-black hover:text-black hover:opacity-90 hover:duration-300">
                      Submit
                    </button>
                  </form>
                </>
              )}
            </>
          ) : (
            <>
              <div className="border border-gray-300 py-2 px-2">
                <p>
                  Please{" "}
                  <Link
                    to="/login"
                    className="text-red-800 underline hover:cursor-pointer"
                  >
                    Login
                  </Link>{" "}
                  to write a review
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
