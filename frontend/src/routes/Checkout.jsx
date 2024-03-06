import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="main flex flex-col   border border-red-400 p-4 lg:flex-row lg:justify-around max-w-screen-xl mx-auto">
        {/* billing section */}
        <div className="shipping p-3 lg:p-6  border bg-neutral-100 rounded-md drop-shadow-lg md:my-6 md:mx-6 md:px-6 lg:my-8 lg:w-1/2">
          <h3 className="text-2xl mb-6 mt-2">Shipping Information</h3>

          {/* name */}
          <div className="names grid grid-cols-2 space-x-4  ">
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                name="firstName"
                className="firstName border border-slate-400 rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                name="lastName"
                className="Last Name border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* extra */}
          <div className="flex flex-col my-6">
            <input
              type="email"
              name="email"
              className="email border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Email Address"
            />
          </div>

          {/* name */}
          <div className="names grid grid-cols-2 space-x-4 my-6 ">
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                name="country"
                className="Country border border-slate-400 rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Country"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="name"
                name="city"
                className="place border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="City"
              />
            </div>
          </div>

          {/* name */}
          <div className="names grid grid-cols-2 space-x-4  ">
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                name="province"
                className="Province border border-slate-400 rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Province"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="name"
                name="postalCode"
                className="place border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Postal Code"
              />
            </div>
          </div>

          {/* extra */}
          <div className="flex flex-col my-6">
            <input
              type="number"
              name="contact"
              className="contact border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Contact Number"
            />
          </div>

          {/* extra */}
          <div className="flex flex-col my-6">
            <input
              type="number"
              name="contact"
              className="contact border border-slate-400 block rounded-md w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Contact Number"
            />
          </div>
        </div>
        <div className="total p-3 border border-red-400 lg:my-8 rounded-md md:mx-6 lg:w-2/6">
          Total
        </div>
      </div>
    </>
  );
};

export default Checkout;
